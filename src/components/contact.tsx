import { ArrowDown, ArrowRight, ArrowUpRight, CircleAlert, CircleCheck, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/language-provider";
import type { Messages } from "@/i18n/es";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const ENDPOINT = "https://api.web3forms.com/submit";
const MESSAGE_MAX = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "success" | "error";

const fields: Field[] = ["name", "email", "subject", "message"];
const empty: Values = { name: "", email: "", subject: "", message: "" };

function validate(values: Values, errors: Messages["Contact"]["form"]["errors"]): Errors {
  const result: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) result.name = errors.nameRequired;
  else if (name.length < 2) result.name = errors.nameShort;

  if (!email) result.email = errors.emailRequired;
  else if (!EMAIL_PATTERN.test(email)) result.email = errors.emailInvalid;

  if (!subject) result.subject = errors.subjectRequired;
  else if (subject.length < 3) result.subject = errors.subjectShort;

  if (!message) result.message = errors.messageRequired;
  else if (message.length < 10) result.message = errors.messageShort;
  else if (message.length > MESSAGE_MAX) result.message = errors.messageLong;

  return result;
}

export default function Contact() {
  const { t } = useLanguage();
  const f = t.Contact.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(empty);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [status]);

  const errors = validate(values, f.errors);
  const visibleError = (field: Field) => (touched[field] ? errors[field] : undefined);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    const firstInvalid = fields.find((field) => errors[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    if (honey) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formKey,
          subject: `${f.mailSubject}: ${values.subject.trim()}`,
          from_name: values.name.trim(),
          replyto: values.email.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { success?: boolean };
      if (!response.ok || data.success !== true) throw new Error("send failed");

      setStatus("success");
      setValues(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const directLinks: { label: string; value: string; href: string; download?: boolean }[] = [
    { label: t.Contact.links.email, value: site.email, href: `mailto:${site.email}` },
    { label: t.Contact.links.whatsapp, value: site.phone, href: `https://wa.me/${site.whatsapp}` },
    { label: t.Contact.links.linkedin, value: "Mariano Ulloa", href: site.linkedin },
    { label: t.Contact.links.github, value: "nanoulloa", href: site.github },
    { label: t.Contact.links.cv, value: t.Contact.cvValue, href: site.cv, download: true },
  ];

  const field = (name: Field, label: string, placeholder: string, options: { type?: string; autoComplete?: string; wide?: boolean } = {}) => {
    const error = visibleError(name);
    const id = `contact-${name}`;
    const describedBy = cn(error && `${id}-error`, name === "message" && `${id}-count`) || undefined;
    const className = cn(
      "mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-lg text-cream placeholder:text-cream/30 transition-colors duration-300 focus:outline-none",
      error ? "border-danger" : "border-cream/25 focus:border-sand",
    );
    const common = {
      id,
      name,
      placeholder,
      value: values[name],
      "aria-invalid": Boolean(error),
      "aria-describedby": describedBy,
      onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
      onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((current) => ({ ...current, [name]: event.target.value }));
        if (status !== "idle" && status !== "sending") setStatus("idle");
      },
    };

    return (
      <div className={cn(options.wide && "sm:col-span-2")}>
        <label htmlFor={id} className="text-xs font-medium tracking-[0.15em] text-cream/60 uppercase">
          {label}
          <span aria-hidden="true"> *</span>
          <span className="sr-only"> ({f.required})</span>
        </label>
        {name === "message" ? (
          <textarea rows={4} className={cn(className, "resize-y")} {...common} />
        ) : (
          <input type={options.type ?? "text"} autoComplete={options.autoComplete} className={className} {...common} />
        )}
        <div className="flex justify-between gap-4">
          <p id={`${id}-error`} className="mt-2 text-sm text-danger">
            {error}
          </p>
          {name === "message" && (
            <p
              id={`${id}-count`}
              className={cn("mt-2 shrink-0 text-xs", values.message.length > MESSAGE_MAX ? "text-danger" : "text-cream/40")}
            >
              {values.message.length}/{MESSAGE_MAX}
              <span className="sr-only"> {f.count}</span>
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-cream/10 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="contacto-title" title={t.Contact.title} subtitle={t.Contact.subtitle} />

          <Reveal delay={100} className="mt-12">
            <p className="text-xs font-medium tracking-[0.15em] text-cream/60 uppercase">{t.Contact.direct}</p>
            <ul className="mt-4 border-t border-cream/15">
              {directLinks.map((link) => (
                <li key={link.href} className="border-b border-cream/15">
                  <a
                    href={link.href}
                    download={link.download}
                    target={link.href.startsWith("mailto:") || link.download ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm text-cream/60">{link.label}</span>
                    <span className="flex min-w-0 items-center gap-2 transition-colors group-hover:text-sand">
                      <span className="truncate">{link.value}</span>
                      {link.download ? (
                        <ArrowDown className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                      ) : (
                        <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <form ref={formRef} noValidate onSubmit={onSubmit} className="relative grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {field("name", f.name, f.namePlaceholder, { autoComplete: "name" })}
            {field("email", f.email, f.emailPlaceholder, { type: "email", autoComplete: "email" })}
            {field("subject", f.subject, f.subjectPlaceholder, { wide: true })}
            {field("message", f.message, f.messagePlaceholder, { wide: true })}

            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honey}
                onChange={(event) => setHoney(event.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 rounded-full bg-brown px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-sand hover:text-espresso disabled:opacity-70"
              >
                {status === "sending" ? f.sending : f.send}
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <div ref={statusRef} aria-live="polite" className="mt-6 scroll-mb-28">
                {status === "success" && (
                  <div className="fade-in flex gap-4 rounded-2xl bg-sand p-5 text-espresso">
                    <CircleCheck className="mt-0.5 size-6 shrink-0 text-brown" aria-hidden="true" />
                    <div>
                      <p className="font-bold">{f.successTitle}</p>
                      <p className="mt-1 text-espresso/80">{f.success}</p>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="fade-in flex gap-4 rounded-2xl border border-danger/60 p-5">
                    <CircleAlert className="mt-0.5 size-6 shrink-0 text-danger" aria-hidden="true" />
                    <div>
                      <p className="font-bold">{f.errorTitle}</p>
                      <p className="mt-1 text-cream/80">
                        {f.error}{" "}
                        <a href={`mailto:${site.email}`} className="link text-sand">
                          {site.email}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}
                {status === "idle" && fields.some((name) => touched[name] && errors[name]) && (
                  <p className="text-sm text-danger">{f.fixErrors}</p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

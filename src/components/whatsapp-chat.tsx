import { ArrowUp, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/mariano.jpg";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppChat() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message.trim() || t.WhatsApp.defaultMessage)}`;

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onSent = () => {
    window.setTimeout(() => {
      setMessage("");
      setOpen(false);
    });
  };

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end sm:right-8">
      <div
        id="whatsapp-chat"
        role="dialog"
        aria-label="WhatsApp"
        inert={!open}
        className={cn(
          "mb-4 w-[min(21rem,calc(100vw-2.5rem))] origin-bottom-right overflow-hidden rounded-2xl bg-cream text-espresso shadow-2xl shadow-espresso/40 transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <div className="flex items-center gap-3 bg-espresso px-4 py-3 text-cream">
          <img src={portrait} alt="" className="size-10 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Mariano Ulloa</p>
            <p className="mt-1 text-xs text-cream/60">{t.WhatsApp.status}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.WhatsApp.close}
            className="flex size-8 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-sand/50 px-4 py-3 text-sm">{t.WhatsApp.greeting}</p>
        </div>

        <div className="flex items-end gap-2 border-t border-espresso/10 p-3">
          <label htmlFor="whatsapp-message" className="sr-only">
            {t.WhatsApp.label}
          </label>
          <textarea
            ref={inputRef}
            id="whatsapp-message"
            rows={2}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" || event.shiftKey) return;
              event.preventDefault();
              linkRef.current?.click();
            }}
            placeholder={t.WhatsApp.placeholder}
            className="flex-1 resize-none bg-transparent px-2 py-2 text-sm placeholder:text-espresso/40 focus:outline-none"
          />
          <a
            ref={linkRef}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onSent}
            aria-label={t.WhatsApp.send}
            title={t.WhatsApp.send}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brown text-cream transition-colors duration-300 hover:bg-espresso"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="whatsapp-chat"
        aria-label={open ? t.WhatsApp.close : t.WhatsApp.open}
        className="flex size-14 items-center justify-center rounded-full border border-cream/15 bg-brown text-cream shadow-xl shadow-espresso/40 transition-transform duration-300 hover:scale-105"
      >
        {open ? <X className="size-6" /> : <WhatsAppIcon className="size-6" />}
      </button>
    </div>
  );
}

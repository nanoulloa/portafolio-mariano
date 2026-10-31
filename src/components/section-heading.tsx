import Reveal from "./reveal";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ id, title, subtitle }: Props) {
  return (
    <Reveal className="max-w-2xl">
      <h2 id={id} className="text-4xl leading-none font-bold tracking-tight sm:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-lg leading-relaxed opacity-75">{subtitle}</p>}
    </Reveal>
  );
}

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/cn";

type Props = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({ delay = 0, className, children }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

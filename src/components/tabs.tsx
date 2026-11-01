import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props<T extends string> = {
  label: string;
  idPrefix: string;
  items: { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export default function Tabs<T extends string>({ label, idPrefix, items, value, onChange, className }: Props<T>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = (index + step + items.length) % items.length;
    onChange(items[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div role="tablist" aria-label={label} className={cn("flex flex-wrap gap-x-7 gap-y-3", className)}>
      {items.map((item, index) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            ref={(element) => {
              refs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "link-grow pb-1 text-sm font-medium transition-opacity duration-300",
              selected ? "opacity-100" : "opacity-55 hover:opacity-100",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

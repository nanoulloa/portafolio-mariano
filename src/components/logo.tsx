import { useId, type SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  const clip = useId();

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <clipPath id={clip}>
        <circle cx="24" cy="24" r="24" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect width="48" height="48" fill="#C9B79C" />
        <circle cx="24" cy="15" r="5" fill="#6B4F3A" />
        <path d="M-2 40 15 19.5l8 9.5 9.5-13L50 38v12H-2Z" fill="#2B2118" />
      </g>
      <circle cx="24" cy="24" r="23" stroke="#C9B79C" strokeWidth="2" />
    </svg>
  );
}

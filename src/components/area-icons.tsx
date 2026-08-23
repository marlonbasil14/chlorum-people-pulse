/**
 * Iconografia de linha desenhada à mão — extraída literalmente do SVG
 * do protótipo People Intelligence. Traço fino, azul de marca.
 */
import type { ReactElement } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "var(--chl-blue-600)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const AREA_ICONS: Record<string, ReactElement> = {
  saude: (
    <svg {...base}>
      <path d="M12 3c4 2.2 7 5 7 9a7 7 0 0 1-14 0c0-4 3-6.8 7-9Z" />
      <path d="M8.5 12h1.8l1.2-2.4 1.6 4 1-1.6H16.5" />
    </svg>
  ),
  remuneracao: (
    <svg {...base}>
      <circle cx="8.5" cy="8.5" r="5" />
      <circle cx="15" cy="14.5" r="5" />
      <path d="M8.5 8.5v0M15 14.5v0" />
    </svg>
  ),
  produtividade: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12 16 8" />
      <path d="M8 15h1M8 12h1M8 9h1" />
    </svg>
  ),
  demografia: (
    <svg {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M14.8 19c.3-2.3 1.8-4 3.7-4.4" />
    </svg>
  ),
  rs: (
    <svg {...base}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.3 14.3 20 20" />
      <path d="M10 7.5v2M10 7.5c1.2 0 1.8.6 1.8 1.4S11.2 10 10 10" />
    </svg>
  ),
  desenvolvimento: (
    <svg {...base}>
      <path d="M12 21c0-5 0-8 0-8" />
      <path d="M12 13c-4 0-6-2.5-6-6 4 0 6 2 6 4 0-2 2-4 6-4 0 3.5-2 6-6 6Z" />
    </svg>
  ),
  esg: (
    <svg {...base}>
      <circle cx="9" cy="9" r="4.5" />
      <circle cx="15" cy="9" r="4.5" />
      <circle cx="12" cy="15" r="4.5" />
    </svg>
  ),
};

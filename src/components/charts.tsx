/**
 * Motor de gráficos SVG leve, no padrão visual Chlorum.
 * Portado literalmente do protótipo HTML (barra, linha, donut).
 */

export const BLUE = "var(--chl-blue-600)";
export const BLUE_L = "var(--chl-blue-300)";
export const NAVY = "var(--chl-navy-800)";
export const SUCCESS = "var(--chl-success)";
export const WARNING = "var(--chl-warning)";
export const DANGER = "var(--chl-danger)";
export const GRAY = "var(--chl-gray-200)";
export const GRAY_300 = "var(--chl-gray-300)";

export type Bar = { l: string; v: number; color?: string };

export function BarChart({
  data,
  w = 260,
  h = 120,
  color = BLUE,
  metaLine = null,
  labels = true,
}: {
  data: Bar[];
  w?: number;
  h?: number;
  color?: string;
  metaLine?: number | null;
  labels?: boolean;
}) {
  const max = Math.max(...data.map((d) => d.v), metaLine || 0) * 1.15;
  const bw = w / data.length;

  return (
    <svg viewBox={`0 0 ${w} ${h + 22}`} width="100%" height={h + 22} style={{ overflow: "visible" }}>
      {data.map((d, i) => {
        const bh = (d.v / max) * h;
        const x = i * bw + bw * 0.22;
        const bwFinal = bw * 0.56;
        return (
          <rect
            key={`b${i}`}
            className="abar"
            x={x}
            y={h - bh}
            width={bwFinal}
            height={bh}
            rx={4}
            fill={d.color || color}
            style={{ "--d": `${i * 45}ms` } as React.CSSProperties}
          />
        );
      })}
      {metaLine ? (
        <line
          x1={0}
          y1={h - (metaLine / max) * h}
          x2={w}
          y2={h - (metaLine / max) * h}
          stroke={DANGER}
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />
      ) : null}
      {labels &&
        data.map((d, i) => {
          const x = i * bw + bw * 0.22;
          const bwFinal = bw * 0.56;
          return (
            <text
              key={`t${i}`}
              x={x + bwFinal / 2}
              y={h + 16}
              textAnchor="middle"
              fontSize={9}
              fontWeight={400}
              fill="var(--text-muted)"
              fontFamily="Nunito"
            >
              {d.l}
            </text>
          );
        })}
    </svg>
  );
}

export type Series = { data: number[]; color: string };

export function LineChart({
  series,
  w = 260,
  h = 110,
  metaLine = null,
}: {
  series: Series[];
  w?: number;
  h?: number;
  metaLine?: number | null;
}) {
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all) * 1.15;
  const min = Math.min(0, Math.min(...all) * 0.9);
  const range = max - min || 1;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} style={{ overflow: "visible" }}>
      {series.map((s, si) => {
        const n = s.data.length;
        const step = w / (n - 1);
        const pts = s.data.map((v, i) => `${i * step},${h - ((v - min) / range) * h}`).join(" ");
        return (
          <g key={si}>
            <polyline
              className="aline"
              points={pts}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="1400"
              strokeDashoffset="1400"
              style={{ "--d": `${si * 120}ms` } as React.CSSProperties}
            />
            {s.data.map((v, i) => (
              <circle
                key={i}
                className="adot"
                cx={i * step}
                cy={h - ((v - min) / range) * h}
                r={2.6}
                fill={s.color}
                style={{ "--d": `${si * 120 + 500 + i * 30}ms` } as React.CSSProperties}
              />
            ))}
          </g>
        );
      })}
      {metaLine != null ? (
        <line
          x1={0}
          y1={h - ((metaLine - min) / range) * h}
          x2={w}
          y2={h - ((metaLine - min) / range) * h}
          stroke={DANGER}
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />
      ) : null}
    </svg>
  );
}

export function Donut({
  pct,
  size = 110,
  color = BLUE,
  track = GRAY,
  thickness = 14,
  label = "",
}: {
  pct: number;
  size?: number;
  color?: string;
  track?: string;
  thickness?: number;
  label?: string;
}) {
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * Math.min(pct, 1);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size} style={{ overflow: "visible" }}>
      <circle cx={c} cy={c} r={r} fill="none" stroke={track} strokeWidth={thickness} />
      <circle
        className="adonut"
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeDasharray={`${dash} ${circ}`}
        strokeDashoffset={dash}
        strokeLinecap="round"
        transform={`rotate(-90 ${c} ${c})`}
      />
      <text
        className="adonut-label"
        x={c}
        y={c + 6}
        textAnchor="middle"
        fontSize={20}
        fontWeight={400}
        fill="var(--text-primary)"
        fontFamily="Nunito"
      >
        {label}
      </text>
    </svg>
  );
}

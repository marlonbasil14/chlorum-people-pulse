type Variant = "gestao" | "remuneracao";

const CONF: Record<Variant, { seal: string; first: string; second: string; color: string }> = {
  gestao: { seal: "GG", first: "Gente e", second: "Gestão", color: "#1B57A6" },
  remuneracao: { seal: "GR", first: "Gente e", second: "Remuneração", color: "#5A86BE" },
};

export function BrandLockup({
  variant = "gestao",
  reverse = false,
  size = 40,
}: {
  variant?: Variant;
  reverse?: boolean;
  size?: number;
}) {
  const c = CONF[variant];
  const ink = reverse ? "#ffffff" : c.color;

  return (
    <span className="brand-lockup" aria-label={`${c.first} ${c.second} — Chlorum Solutions`}>
      <span
        className="brand-seal"
        style={{
          width: size,
          height: size,
          background: reverse ? "#ffffff" : c.color,
          color: reverse ? c.color : "#ffffff",
          fontSize: size * 0.4,
        }}
      >
        {c.seal}
      </span>
      <span className="brand-words" style={{ color: ink }}>
        <span className="brand-name" style={{ fontSize: size * 0.55 }}>
          {c.first} <em>{c.second}</em>
        </span>
        <span className="brand-org" style={{ color: reverse ? "#ffffff" : "#8a93a6" }}>
          Chlorum Solutions
        </span>
      </span>
    </span>
  );
}

import { useState } from "react";
import { BarChart } from "@/components/charts";
import { AREA_ICONS } from "@/components/area-icons";
import {
  CATS,
  AREA_DESC,
  ONDA1,
  RETENTION,
  BUDGET_ROWS,
  HEAT_COLS,
  HEAT_ROWS,
  MARKET_BINS,
  RISK_ROWS,
  type Cat,
  type Kpi,
} from "@/lib/dashboard-data";
import logo from "@/assets/chlorum-logo.png.asset.json";
import { useSession } from "@/components/session";

function KpiCard({ k }: { k: Kpi }) {
  return (
    <div className="card">
      <div className="kpi-head">
        <h3>{k.title}</h3>
        <span className={`tag ${k.tag.cls}`}>{k.tag.txt}</span>
      </div>
      <div className="desc">{k.desc}</div>
      {k.value ? (
        <div className="kpi-value">
          {k.value} <span className="unit">{k.unit || ""}</span>
        </div>
      ) : null}
      {k.delta ? (
        <div className={`kpi-delta ${k.deltaTone || "neutral"}`}>{k.delta}</div>
      ) : null}
      <div className="chart-wrap">{k.chart}</div>
    </div>
  );
}

function RemuneracaoWidgets() {
  let idx = 0;
  return (
    <>
      <div className="alert-card">
        <h3>Alertas de risco de retenção</h3>
        <div className="sub">{RETENTION.criterio}</div>
        <div className="alert-pill">
          <b className="num">{RETENTION.n}</b> colaboradores em risco de retenção por defasagem
          salarial, representando <b className="pct">{RETENTION.pct}%</b> da base elegível.
        </div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 14 }}>Budget do ciclo por diretoria</h3>
        <div className="budget-grid">
          {BUDGET_ROWS.map((r) => (
            <div className="budget-card" key={r.dir}>
              <div className="dir">{r.dir}</div>
              <div className="row1">
                <span>
                  Headcount: <b>{r.hc}</b>
                </span>
                <span>
                  Elegíveis contemplados: <b>{r.elig}</b>
                </span>
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${r.total > 0 ? Math.min(100, (r.used / r.total) * 100) : 0}%` }}
                />
              </div>
              <div className="foot">
                R$ {r.used.toLocaleString("pt-BR")} de R$ {r.total.toLocaleString("pt-BR")} ({r.pct}
                %)
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 14 }}>
          Heatmap de posicionamento de mercado — Grade × Diretoria
        </h3>
        <table className="heatmap-table">
          <thead>
            <tr>
              <th>Grade</th>
              {HEAT_COLS.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HEAT_ROWS.map((r) => (
              <tr key={r.grade}>
                <td className="grade">{r.grade}</td>
                {HEAT_COLS.map((c) => {
                  const v = r.cells[c];
                  idx++;
                  const delay = Math.min(idx * 10, 500);
                  if (v == null)
                    return (
                      <td key={c}>
                        <span className="hcell empty">—</span>
                      </td>
                    );
                  return (
                    <td key={c}>
                      <span
                        className="hcell-wrap"
                        style={
                          { "--d": `${delay}ms`, display: "block" } as React.CSSProperties
                        }
                      >
                        <span className={`hcell ${v >= 86 ? "good" : "bad"}`}>{v}%</span>
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 14 }}>Distribuição de posição de mercado</h3>
        <BarChart data={MARKET_BINS} w={520} h={130} />
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 14 }}>Risco de defasagem por diretoria</h3>
        <div className="risk-grid">
          {RISK_ROWS.map((r) => (
            <div className="risk-card" key={r.dir}>
              <div className="dir">{r.dir}</div>
              <div className={`pct ${r.alert ? "flag" : ""}`}>{r.pct}%</div>
              <div className="detail">
                abaixo de 80% da mediana ({r.n} de {r.total})
              </div>
              {r.alert ? <span className="badge-alert">Acima do limiar de 15%</span> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Cover({ onOpen }: { onOpen: (id: string) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const areas = CATS.filter((c) => c.id !== "cover");

  return (
    <>
      <div className="cover-hero">
        <div className="cover-eyebrow">Chlorum Solutions · Gente e Gestão</div>
        <h1 className="cover-title">
          People <em>Intelligence</em>
        </h1>
        <p className="cover-sub">
          Panorama estratégico dos indicadores de pessoas — organizado por área, com o recorte da
          primeira onda de implementação já sinalizado ao lado.
        </p>
      </div>
      <div className="cover-layout">
        <div className="icon-grid">
          {areas.map((a) => (
            <button className="icon-card" key={a.id} onClick={() => onOpen(a.id)}>
              <div className="icon-badge">{AREA_ICONS[a.id]}</div>
              <h4>{a.label}</h4>
              <p>{AREA_DESC[a.id]}</p>
              <span className="go">Ver painel completo →</span>
            </button>
          ))}
        </div>
        <aside className="toc-aside">
          <div className="toc-title">Áreas &amp; indicadores — Onda 1</div>
          {areas.map((a) => (
            <div className={`toc-item ${open === a.id ? "open" : ""}`} key={a.id}>
              <div className="toc-row" onClick={() => setOpen(open === a.id ? null : a.id)}>
                <span className="name">{a.label}</span>
                <span className="chev">▶</span>
              </div>
              <div className="toc-body">
                <ul className="toc-list">
                  {(ONDA1[a.id] || []).map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <button className="toc-cta" onClick={() => onOpen(a.id)}>
                  Abrir painel →
                </button>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </>
  );
}

function AreaSection({ cat }: { cat: Cat }) {
  return (
    <section className="category">
      <div className="cat-header">
        <div>
          <h2>{cat.title}</h2>
          <p>{cat.desc}</p>
        </div>
      </div>
      {cat.bulletin ? (
        <div className="bulletin">
          <h3>{cat.bulletin.title}</h3>
          <div className="src">{cat.bulletin.note}</div>
          {cat.bulletin.items.map((it) => (
            <div className="bulletin-row" key={it.planta + it.data}>
              <span className={`bdot ${it.tone}`} />
              <span className="planta">{it.planta}</span>
              <span className="ev">
                {it.evento} <strong>({it.classe})</strong>
              </span>
              <span className="dt">{it.data}</span>
            </div>
          ))}
        </div>
      ) : null}
      {cat.remuneracaoWidgets ? <RemuneracaoWidgets /> : null}
      {cat.note ? <div className="method-note">{cat.note}</div> : null}
      <div className="grid">
        {cat.cards.map((k) => (
          <KpiCard k={k} key={k.title} />
        ))}
      </div>
    </section>
  );
}

export function Dashboard() {
  const [active, setActive] = useState("cover");
  const { session, signOut } = useSession();
  const cat = CATS.find((c) => c.id === active) ?? CATS[0]!;
  const onCover = active === "cover";

  return (
    <>
      <header className="topbar">
        <div
          className="brand"
          style={{ cursor: "pointer" }}
          title="Voltar à capa"
          onClick={() => setActive("cover")}
        >
          <img src={logo.url} alt="Chlorum Solutions" />
          <div>
            <h1>People Intelligence</h1>
            <div className="sub">Visão consolidada · dados de exemplo para validação de layout</div>
          </div>
        </div>
        <div className="topbar-right">
          {!onCover && (
            <div className="filters">
              <select>
                <option>Todas as unidades</option>
                <option>Uberlândia</option>
                <option>Bahia</option>
                <option>Ceará</option>
                <option>Igarassu</option>
                <option>Maranhão</option>
                <option>Palmeira</option>
                <option>Corporate</option>
                <option>Distribution</option>
              </select>
              <select>
                <option>Todas as diretorias</option>
                <option>Comercial</option>
                <option>Operações Industriais</option>
                <option>Finanças</option>
                <option>Gente e Gestão</option>
                <option>Estratégia</option>
              </select>
              <select>
                <option>Últimos 12 meses</option>
                <option>Ano corrente</option>
                <option>Último trimestre</option>
              </select>
            </div>
          )}
          <div className="session-chip">
            <span className="who">{session?.name}</span>
            <button className="logout" onClick={signOut}>
              Sair
            </button>
          </div>
        </div>
      </header>

      <nav className="tabs">
        {CATS.map((c) => (
          <button
            key={c.id}
            className={c.id === active ? "active" : ""}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </nav>

      <main key={active} className={onCover ? "cover-main" : undefined}>
        {onCover ? <Cover onOpen={setActive} /> : <AreaSection cat={cat} />}
        <div className="footnote">
          Dados de exemplo para validação de layout e leitura visual — não refletem números reais da
          operação. Book de indicadores completo disponível em documento anexo.
        </div>
      </main>

      <footer className="session-bar">
        <span className="live" />
        <span>
          Sessão ativa · início às{" "}
          {session?.startedAt.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </footer>
    </>
  );
}

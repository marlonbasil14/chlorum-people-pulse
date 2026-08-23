/**
 * Dados de exemplo por categoria — portados literalmente do protótipo
 * People Intelligence (Book de Indicadores de Gente, Onda 1).
 */
import type { ReactNode } from "react";
import {
  BarChart,
  LineChart,
  Donut,
  BLUE,
  BLUE_L,
  NAVY,
  SUCCESS,
  DANGER,
  GRAY_300,
} from "@/components/charts";

export type Tag = { cls: "priority" | "important" | "desirable"; txt: string };
export type DeltaTone = "good" | "bad" | "neutral";

export type Kpi = {
  title: string;
  desc: string;
  tag: Tag;
  value?: string;
  unit?: string;
  delta?: string | null;
  deltaTone?: DeltaTone;
  chart: ReactNode;
};

export type BulletinItem = {
  planta: string;
  evento: string;
  classe: string;
  tone: "good" | "bad" | "neutral";
  data: string;
};

export type BudgetRow = {
  dir: string;
  hc: number;
  elig: string;
  used: number;
  total: number;
  pct: number;
};

export type HeatRow = { grade: string; cells: Record<string, number | null> };

export type RiskRow = { dir: string; pct: number; n: number; total: number; alert: boolean };

export type Cat = {
  id: string;
  label: string;
  title?: string;
  desc?: string;
  cards: Kpi[];
  bulletin?: { title: string; note: string; items: BulletinItem[] };
  note?: string;
  remuneracaoWidgets?: boolean;
};

const PRIORITY: Tag = { cls: "priority", txt: "Prioritário" };
const IMPORTANT: Tag = { cls: "important", txt: "Importante" };
const DESIRABLE: Tag = { cls: "desirable", txt: "Desejável" };

/* ---------- Widgets de Remuneração ---------- */
export const RETENTION = {
  n: 61,
  pct: "40.9",
  criterio: "Desempenho forte, mais de 2 anos de casa e posição de mercado abaixo de 85%.",
};

export const BUDGET_ROWS: BudgetRow[] = [
  { dir: "ESTRATÉGIA", hc: 2, elig: "NaN%", used: 0, total: 3137, pct: 0 },
  { dir: "COMERCIAL", hc: 29, elig: "30%", used: 5573, total: 54869, pct: 10 },
  { dir: "INDUSTRIAL", hc: 314, elig: "83%", used: 38359, total: 236841, pct: 16 },
  { dir: "COMPRAS E LOGÍSTICA", hc: 27, elig: "79%", used: 7595, total: 37385, pct: 20 },
  { dir: "GENTE E GESTÃO", hc: 14, elig: "44%", used: 4864, total: 32135, pct: 15 },
  { dir: "FINANCEIRO", hc: 33, elig: "36%", used: 6003, total: 68066, pct: 9 },
  { dir: "JURÍDICO", hc: 6, elig: "50%", used: 2281, total: 17045, pct: 13 },
];

export const HEAT_COLS = [
  "COMERCIAL",
  "COMPRAS E LOG.",
  "ESTRATÉGIA",
  "FINANCEIRO",
  "GENTE E GESTÃO",
  "INDUSTRIAL",
  "JURÍDICO",
];

const hrow = (
  grade: string,
  [c, cl, e, f, gg, ind, j]: (number | null)[],
): HeatRow => ({
  grade,
  cells: {
    COMERCIAL: c,
    "COMPRAS E LOG.": cl,
    ESTRATÉGIA: e,
    FINANCEIRO: f,
    "GENTE E GESTÃO": gg,
    INDUSTRIAL: ind,
    JURÍDICO: j,
  },
});

export const HEAT_ROWS: HeatRow[] = [
  hrow("0", [0, 0, 0, 0, 0, 0, 0]),
  hrow("1", [null, null, null, null, null, 47, null]),
  hrow("2", [null, 100, null, null, null, 86, null]),
  hrow("3", [null, null, null, null, null, 90, null]),
  hrow("4", [null, null, null, null, null, 87, null]),
  hrow("5", [null, null, null, null, null, 96, null]),
  hrow("6", [89, 85, null, 91, null, 85, null]),
  hrow("7", [89, 95, null, 90, 94, 92, 86]),
  hrow("8", [94, 89, null, 87, 91, 92, null]),
  hrow("9", [null, 93, null, 94, null, 94, null]),
  hrow("10", [86, 80, null, 88, 86, 83, null]),
  hrow("11", [80, 95, null, null, 84, 92, null]),
  hrow("12", [67, null, null, 83, 85, 75, 82]),
  hrow("13", [74, 74, 91, 81, 90, 95, 87]),
  hrow("14", [92, 93, null, 93, null, 87, null]),
  hrow("15", [null, null, null, 100, null, null, null]),
];

export const MARKET_BINS = [
  { l: "<80%", v: 200, color: DANGER },
  { l: "80-90%", v: 85, color: SUCCESS },
  { l: "90-100%", v: 155, color: SUCCESS },
  { l: "100-110%", v: 40, color: SUCCESS },
  { l: "110-120%", v: 45, color: SUCCESS },
  { l: ">120%", v: 0, color: SUCCESS },
];

export const RISK_ROWS: RiskRow[] = [
  { dir: "COMERCIAL", pct: 28, n: 8, total: 29, alert: true },
  { dir: "COMPRAS E LOGÍSTICA", pct: 19, n: 5, total: 26, alert: true },
  { dir: "ESTRATÉGIA", pct: 50, n: 1, total: 2, alert: true },
  { dir: "FINANCEIRO", pct: 12, n: 4, total: 33, alert: false },
  { dir: "GENTE E GESTÃO", pct: 14, n: 2, total: 14, alert: false },
  { dir: "INDUSTRIAL", pct: 27, n: 83, total: 300, alert: true },
  { dir: "JURÍDICO", pct: 33, n: 2, total: 6, alert: true },
];

/* ---------- Índice da capa ---------- */
export const ONDA1: Record<string, string[]> = {
  saude: [
    "Conformidade de exames ocupacionais (PCMSO)",
    "Taxa de absenteísmo por saúde",
    "Afastamentos por doença ocupacional",
    "Boletim semanal de acidentes (embarcado)",
    "Monitoramento biológico de mercúrio — Igarassu",
  ],
  remuneracao: [
    "Compa-ratio consolidado",
    "Compa-ratio por diretoria",
    "Colaboradores abaixo do mínimo da faixa",
    "Alertas de risco de retenção salarial",
    "Budget do ciclo por diretoria",
    "Heatmap Grade × Diretoria",
    "Distribuição de posição de mercado",
    "Risco de defasagem por diretoria",
  ],
  produtividade: [
    "Lucro / Headcount",
    "Resultado / Custo de Headcount",
    "Produção de Cloro por Headcount (t Cl₂/HC)",
    "Folha por ECU (Payroll/ECU)",
    "Receita / Headcount (referência)",
    "Custo de pessoal / Headcount",
  ],
  demografia: [
    "Quadro de pessoal",
    "Custo total de pessoal",
    "Custo médio de pessoal",
    "Admissões",
    "Desligamentos",
    "Taxa de desligamento (turnover)",
    "Turnover do período de experiência",
  ],
  rs: [
    "Vagas abertas / Vagas fechadas",
    "Time to hire / Time to fill",
    "Cumprimento de SLA de recrutamento",
  ],
  desenvolvimento: [
    "Cobertura de onboarding formal",
    "Aderência ao PDI (Plano de Desenvolvimento Individual)",
    "Aderência ao treinamento de compliance e ética",
  ],
  esg: [
    "Representatividade de gênero no quadro total",
    "Representatividade étnico-racial autodeclarada",
    "Cobertura do código de conduta (aceite formal)",
  ],
};

export const AREA_DESC: Record<string, string> = {
  saude: "PCMSO, absenteísmo e vigilância biológica.",
  remuneracao: "Posicionamento de mercado e ciclo de ajuste.",
  produtividade: "ROI de headcount — demanda direta do CEO.",
  demografia: "Quadro, custo e movimentação de pessoas.",
  rs: "Funil de contratação e readiness de plantas.",
  desenvolvimento: "Onboarding, trilhas e ciclo de avaliação.",
  esg: "Diversidade, inclusão e licença social.",
};

/* ================= CATEGORIAS ================= */
export const CATS: Cat[] = [
  { id: "cover", label: "Visão Geral", cards: [] },
  {
    id: "saude",
    label: "Saúde Ocupacional",
    title: "Saúde Ocupacional",
    desc: "Interface de GG com o risco de exposição química — PCMSO, absenteísmo por saúde e riscos psicossociais. Segurança do Trabalho (TF/TG/PSM) é indicador de Operações/HSE, fora deste escopo.",
    bulletin: {
      title:
        "Boletim semanal de acidentes — Operações Industriais / Segurança e Meio Ambiente",
      note: "Conteúdo de referência, publicado por Operações (Diego Rodrigo). GG exibe para visibilidade da liderança de Saúde, sem ser indicador de propriedade de GG.",
      items: [
        {
          planta: "Igarassu",
          evento: "Quase-acidente — vazamento de baixa vazão na linha de cloro",
          classe: "Sem afastamento",
          tone: "neutral",
          data: "18/ago",
        },
        {
          planta: "Bahia",
          evento: "Acidente com afastamento — queda mesmo nível",
          classe: "Com afastamento",
          tone: "bad",
          data: "15/ago",
        },
        {
          planta: "Uberlândia",
          evento: "Nenhum registro na semana",
          classe: "—",
          tone: "good",
          data: "—",
        },
      ],
    },
    cards: [
      {
        title: "Conformidade de exames ocupacionais (PCMSO)",
        desc: "ASO admissional/periódico/demissional em dia, por planta — periodicidade varia por risco do cargo.",
        tag: PRIORITY,
        value: "93",
        unit: "%",
        delta: "2 plantas com pendências",
        deltaTone: "bad",
        chart: (
          <BarChart
            metaLine={95}
            data={[
              { l: "UDI", v: 98 },
              { l: "Ceará", v: 95 },
              { l: "BA", v: 89, color: "var(--chl-warning)" },
              { l: "Igarassu", v: 85, color: "var(--chl-warning)" },
              { l: "Palmeira", v: 97 },
            ]}
          />
        ),
      },
      {
        title: "Taxa de absenteísmo por saúde",
        desc: "Dias não trabalhados por atestado médico — exclui afastamento por acidente (indicador de HSE).",
        tag: PRIORITY,
        value: "2.4",
        unit: "%",
        delta: "▼ estável no trimestre",
        deltaTone: "neutral",
        chart: <LineChart series={[{ data: [3.1, 2.9, 2.7, 2.6, 2.5, 2.4], color: BLUE }]} />,
      },
      {
        title: "Afastamentos por doença ocupacional",
        desc: "Adoecimento com nexo ocupacional reconhecido (ex.: respiratório, dermatológico), validado pelo médico do trabalho.",
        tag: PRIORITY,
        value: "4",
        unit: "no trimestre",
        chart: (
          <BarChart
            data={[
              { l: "Q1", v: 6 },
              { l: "Q2", v: 5 },
              { l: "Q3", v: 4 },
            ]}
          />
        ),
      },
      {
        title: "Riscos psicossociais (NR-1) — diagnóstico",
        desc: "Execução do novo requisito legal de gestão de riscos psicossociais por planta/área.",
        tag: PRIORITY,
        value: "68",
        unit: "% concluído",
        delta: "Prazo legal se aproximando",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "UDI", v: 100, color: SUCCESS },
              { l: "Ceará", v: 80 },
              { l: "BA", v: 40, color: "var(--chl-warning)" },
              { l: "Igarassu", v: 20, color: "var(--chl-danger)" },
              { l: "Palmeira", v: 100, color: SUCCESS },
            ]}
          />
        ),
      },
      {
        title: "Cobertura de campanhas de saúde e vacinação",
        desc: "Adesão a programas preventivos oferecidos pela empresa.",
        tag: IMPORTANT,
        value: "71",
        unit: "%",
        chart: (
          <BarChart
            data={[
              { l: "Gripe", v: 82 },
              { l: "Check-up", v: 64 },
              { l: "Outras", v: 66 },
            ]}
          />
        ),
      },
      {
        title: "Atendimentos ambulatoriais internos",
        desc: "Volume de atendimentos nos ambulatórios de planta — leitura de demanda assistencial e triagem precoce.",
        tag: IMPORTANT,
        value: "312",
        unit: "atendimentos/mês",
        delta: "▲ 8% vs. mês anterior",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "UDI", v: 96 },
              { l: "Ceará", v: 71 },
              { l: "BA", v: 44 },
              { l: "Igarassu", v: 63 },
              { l: "Palmeira", v: 38 },
            ]}
          />
        ),
      },
      {
        title: "Monitoramento biológico de mercúrio — Igarassu",
        desc: "Resultado semanal dos exames de vigilância biológica, enviado por Marilya (medicina do trabalho). Limite biológico máximo permitido sobreposto.",
        tag: PRIORITY,
        value: "97",
        unit: "% conformidade",
        delta: "1 colaborador acima do IBMP — afastamento preventivo em curso",
        deltaTone: "bad",
        chart: (
          <LineChart metaLine={35} series={[{ data: [22, 19, 24, 18, 21, 17], color: BLUE }]} />
        ),
      },
    ],
  },
  {
    id: "remuneracao",
    label: "Remuneração",
    title: "Remuneração",
    desc: "Posicionamento salarial frente ao mercado — visão consolidada e aberta por diretoria, sob responsabilidade de People & Rewards.",
    remuneracaoWidgets: true,
    cards: [
      {
        title: "Compa-ratio — Chlorum consolidado",
        desc: "Posicionamento da remuneração paga frente ao ponto médio da faixa de mercado (100% = alinhado ao mercado).",
        tag: PRIORITY,
        chart: <Donut pct={0.96} label="96%" />,
      },
      {
        title: "Compa-ratio por diretoria",
        desc: "Mesma métrica aberta por diretoria — sinaliza onde o risco de retenção/atração é maior.",
        tag: PRIORITY,
        delta: "Industrial e Compras e Logística abaixo do mercado",
        deltaTone: "bad",
        chart: (
          <BarChart
            metaLine={100}
            data={[
              { l: "Comerc.", v: 101 },
              { l: "Ind.", v: 88, color: "var(--chl-danger)" },
              { l: "C&L", v: 86, color: "var(--chl-warning)" },
              { l: "Financ.", v: 97 },
              { l: "GG", v: 99 },
              { l: "Estrat.", v: 104 },
              { l: "Jurid.", v: 90 },
            ]}
          />
        ),
      },
      {
        title: "Colaboradores abaixo do mínimo da faixa",
        desc: "Contagem de posições com salário abaixo do piso da faixa salarial de mercado — sinal de urgência de ajuste.",
        tag: PRIORITY,
        value: "14",
        unit: "colaboradores",
        delta: "Concentrado em Industrial",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "Comerc.", v: 1 },
              { l: "Ind.", v: 10, color: "var(--chl-danger)" },
              { l: "Financ.", v: 1 },
              { l: "GG", v: 2 },
            ]}
          />
        ),
      },
      {
        title: "Equidade salarial por gênero (mesma faixa/cargo)",
        desc: "Razão entre remuneração média feminina e masculina, controlada por cargo e faixa.",
        tag: IMPORTANT,
        value: "0.97",
        unit: "razão F/M",
        chart: (
          <LineChart series={[{ data: [0.93, 0.94, 0.95, 0.95, 0.96, 0.97], color: BLUE }]} />
        ),
      },
    ],
  },
  {
    id: "produtividade",
    label: "Produtividade",
    title: "Produtividade de Headcount",
    desc: "Demanda direta do CEO — metade do cálculo vem do Financeiro (receita, custo, folha), metade do controle de headcount de GG. Consolidado por unidade, com dados reais da 2026 Chlorum Productivity Matrix (Finance & G&G inputs).",
    note: "Nota metodológica: Receita/HC penaliza injustamente unidades com produto de menor valor agregado ou processo mais automatizado. Lucro/HC e Resultado/Custo de HC corrigem essa distorção ao ancorar a régua no resultado, não no volume de topo de linha — é a mudança de perspectiva de ROI de investimento em pessoas mencionada pelo CEO. t Cl₂/HC e Payroll/ECU vêm oficialmente da 2026 Chlorum Productivity Matrix (última página do organograma executivo) e não exigem essa mesma negociação metodológica, pois já são indicadores auto-calculados na fonte.",
    cards: [
      {
        title: "Lucro / Headcount",
        desc: 'Substitui a leitura de "receita por colaborador" — mede efetividade real do investimento em pessoas via resultado, não faturamento bruto. Estimativa ilustrativa até acordo formal com Financeiro sobre a linha de resultado.',
        tag: PRIORITY,
        value: "R$ 187",
        unit: "mil / HC / ano",
        delta: "Métrica solicitada diretamente pelo CEO",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 142 },
              { l: "Ceará", v: 98 },
              { l: "Igarassu", v: 231, color: BLUE },
              { l: "Maranhão", v: 87 },
              { l: "Palmeira", v: 176 },
              { l: "Uberl.", v: 264, color: BLUE },
            ]}
          />
        ),
      },
      {
        title: "Resultado / Custo de Headcount",
        desc: "Resultado gerado por real investido em folha — leitura de ROI do investimento em pessoas, não apenas volume de produção por cabeça.",
        tag: PRIORITY,
        value: "4.1",
        unit: "x",
        delta: "▲ 0.3x vs. trimestre anterior",
        deltaTone: "good",
        chart: <LineChart series={[{ data: [3.4, 3.6, 3.7, 3.8, 3.9, 4.1], color: NAVY }]} />,
      },
      {
        title: "Produção de Cloro por Headcount (t Cl₂/HC)",
        desc: "Produtividade física, isolada de preço/receita — direto da Matriz de Produtividade 2026. Aplica-se só às unidades produtoras.",
        tag: PRIORITY,
        value: "147",
        unit: "t Cl₂ / HC / ano",
        delta: "Uberlândia lidera com folga",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 184.9 },
              { l: "Ceará", v: 138.8 },
              { l: "Igarassu", v: 142.5 },
              { l: "Maranhão", v: 253.4 },
              { l: "Palmeira", v: 208.5 },
              { l: "Uberl.", v: 292.0, color: BLUE },
            ]}
          />
        ),
      },
      {
        title: "Folha por ECU (Payroll/ECU)",
        desc: "Custo de folha por unidade de capacidade instalada — compara eficiência entre plantas de porte diferente sem distorção de escala. Direto da Matriz de Produtividade 2026.",
        tag: PRIORITY,
        value: "1.112",
        unit: "R$ / ECU",
        delta: "Igarassu e Ceará acima da média — atenção",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 884 },
              { l: "Ceará", v: 1567, color: "var(--chl-warning)" },
              { l: "Igarassu", v: 1778, color: "var(--chl-danger)" },
              { l: "Maranhão", v: 541 },
              { l: "Palmeira", v: 502 },
              { l: "Uberl.", v: 520 },
            ]}
          />
        ),
      },
      {
        title: "Receita / Headcount",
        desc: "Mantido como referência histórica/setorial — mas não deve ser lido isoladamente como efetividade (vide nota metodológica). Inclui Distribution, reportado à parte na fonte.",
        tag: IMPORTANT,
        value: "R$ 1.055",
        unit: "mil / HC / ano",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 1209 },
              { l: "Ceará", v: 1399 },
              { l: "Igarassu", v: 1083 },
              { l: "Maranhão", v: 1737 },
              { l: "Palmeira", v: 1193 },
              { l: "Uberl.", v: 2054 },
              { l: "Distrib.", v: 2761, color: NAVY },
            ]}
          />
        ),
      },
      {
        title: "Custo de pessoal / Headcount",
        desc: "Custo total por cabeça — insumo direto do Financeiro, cruzado com headcount de GG. Inclui Distribution.",
        tag: PRIORITY,
        value: "R$ 611",
        unit: "mil / HC / ano",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 743 },
              { l: "Ceará", v: 697 },
              { l: "Igarassu", v: 679 },
              { l: "Maranhão", v: 1119 },
              { l: "Palmeira", v: 662 },
              { l: "Uberl.", v: 996 },
              { l: "Distrib.", v: 2183, color: NAVY },
            ]}
          />
        ),
      },
      {
        title: "Composição de headcount por função",
        desc: "Produção, Laboratório, Manutenção, Administrativo e Função Corporativa, por unidade — explica por que a produtividade por HC varia entre plantas de perfil parecido.",
        tag: IMPORTANT,
        value: "430",
        unit: "HC total (Chlor-Alkali)",
        delta: "165 Produção · 22 Lab. · 78 Manut. · 23 Admin. · 142 Corp.",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 34 },
              { l: "Ceará", v: 28 },
              { l: "Igarassu", v: 173, color: BLUE },
              { l: "Maranhão", v: 25 },
              { l: "Palmeira", v: 42 },
              { l: "Uberl.", v: 45 },
            ]}
          />
        ),
      },
      {
        title: "Custo de hora extra / Headcount",
        desc: "Indicador de tensão de dimensionamento de quadro — HC insuficiente aparece primeiro aqui. Inclui Corporate e Distribution, conforme fonte.",
        tag: IMPORTANT,
        value: "R$ 4,7",
        unit: "mil / HC",
        delta: "Distribution e Igarassu em atenção",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "Bahia", v: 5.4 },
              { l: "Ceará", v: 2.5 },
              { l: "Igarassu", v: 6.4, color: "var(--chl-warning)" },
              { l: "Maranhão", v: 2.8 },
              { l: "Palmeira", v: 5.1 },
              { l: "Uberl.", v: 5.9 },
              { l: "Corp.", v: 1.4 },
              { l: "Distrib.", v: 13.9, color: "var(--chl-danger)" },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "demografia",
    label: "Demografia de Pessoal",
    title: "Demografia de Pessoal",
    desc: "Quadro, custo e movimentação — segmentado por origem orgânica vs. M&A.",
    cards: [
      {
        title: "Quadro de pessoal",
        desc: "Colaboradores ativos no encerramento do período, por planta.",
        tag: PRIORITY,
        value: "384",
        unit: "colaboradores",
        delta: "▲ 18 no trimestre (12 orgânico / 6 M&A)",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "UDI", v: 118 },
              { l: "Ceará", v: 96 },
              { l: "BA", v: 54 },
              { l: "Igarassu", v: 61 },
              { l: "Palmeira", v: 55 },
            ]}
          />
        ),
      },
      {
        title: "Custo total de pessoal",
        desc: "Salários + encargos + benefícios, consolidado com câmbio médio do período.",
        tag: PRIORITY,
        value: "R$ 9,4",
        unit: "milhões/mês",
        delta: "▲ 6% vs. mês anterior",
        deltaTone: "neutral",
        chart: (
          <BarChart
            data={[
              { l: "Fev", v: 8.6 },
              { l: "Mar", v: 8.8 },
              { l: "Abr", v: 8.9 },
              { l: "Mai", v: 9.0 },
              { l: "Jun", v: 9.2 },
              { l: "Jul", v: 9.4 },
            ]}
          />
        ),
      },
      {
        title: "Custo médio de pessoal",
        desc: "Comparável apenas dentro do mesmo país (moeda/encargos distintos).",
        tag: PRIORITY,
        value: "R$ 24,5",
        unit: "mil/mês (BR)",
        chart: (
          <BarChart
            data={[
              { l: "Operac.", v: 19.2 },
              { l: "Admin.", v: 31.4 },
            ]}
          />
        ),
      },
      {
        title: "Admissões x Desligamentos",
        desc: "Separado por origem (orgânica vs. integração de plantas adquiridas).",
        tag: PRIORITY,
        value: "+11",
        unit: "saldo no mês",
        delta: "22 admissões / 11 desligamentos",
        deltaTone: "good",
        chart: (
          <BarChart
            data={[
              { l: "Admissões", v: 22, color: BLUE },
              { l: "Desligtos.", v: 11, color: GRAY_300 },
            ]}
          />
        ),
      },
      {
        title: "Taxa de desligamento (turnover)",
        desc: "Comparado entre operação de planta (crítico p/ continuidade) e administrativo.",
        tag: PRIORITY,
        value: "1.9",
        unit: "% a.m.",
        delta: "▼ abaixo da meta de 2.5%",
        deltaTone: "good",
        chart: (
          <LineChart metaLine={2.5} series={[{ data: [2.8, 2.5, 2.3, 2.1, 2.0, 1.9], color: BLUE }]} />
        ),
      },
      {
        title: "Turnover do período de experiência",
        desc: "Desligados com menos de 90 dias — sinal precoce de erro de contratação técnica.",
        tag: PRIORITY,
        value: "6.1",
        unit: "%",
        delta: "▲ atenção em Igarassu",
        deltaTone: "bad",
        chart: (
          <LineChart
            series={[{ data: [4.2, 4.8, 5.1, 5.6, 5.9, 6.1], color: "var(--chl-danger)" }]}
          />
        ),
      },
    ],
  },
  {
    id: "rs",
    label: "Recrutamento & Seleção",
    title: "Recrutamento & Seleção",
    desc: "Funil de contratação, com atenção especial a cargos técnicos de novas plantas.",
    cards: [
      {
        title: "Vagas abertas x fechadas",
        desc: "Volume de demanda vs. entrega do funil, por planta.",
        tag: PRIORITY,
        value: "34 / 28",
        unit: "no mês",
        chart: (
          <BarChart
            data={[
              { l: "Abertas", v: 34, color: BLUE_L },
              { l: "Fechadas", v: 28, color: BLUE },
            ]}
          />
        ),
      },
      {
        title: "Time to hire / Time to fill",
        desc: "Velocidade do funil e velocidade total até o início — crítico para cronograma de start-up.",
        tag: PRIORITY,
        value: "38 / 52",
        unit: "dias",
        chart: (
          <LineChart
            series={[
              { data: [44, 41, 40, 39, 37, 38], color: BLUE },
              { data: [58, 56, 55, 54, 53, 52], color: NAVY },
            ]}
          />
        ),
      },
      {
        title: "Cumprimento de SLA",
        desc: "Aderência ao prazo combinado por planta/perfil — atraso aqui pode atrasar comissionamento.",
        tag: PRIORITY,
        value: "79",
        unit: "%",
        delta: "Abaixo da meta de 85%",
        deltaTone: "bad",
        chart: (
          <BarChart
            metaLine={85}
            data={[
              { l: "UDI", v: 88 },
              { l: "Ceará", v: 81 },
              { l: "BA", v: 70, color: "var(--chl-warning)" },
              { l: "Igarassu", v: 75, color: "var(--chl-warning)" },
            ]}
          />
        ),
      },
      {
        title: "Vagas pendentes de abertura",
        desc: "Gap entre quadro necessário para start-up e vagas já em processo — conecta RH ao roadmap de expansão.",
        tag: IMPORTANT,
        value: "9",
        unit: "vagas",
        delta: "Planta Bahia em implantação",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "Operador", v: 5 },
              { l: "Técnico", v: 3 },
              { l: "Engenh.", v: 1 },
            ]}
          />
        ),
      },
      {
        title: "Custo de recrutamento por vaga",
        desc: "Custo total do time de R&S + ferramentas + consultorias + horas de entrevistador.",
        tag: DESIRABLE,
        value: "R$ 4.850",
        unit: "/ vaga",
        chart: (
          <BarChart
            data={[
              { l: "Mar", v: 5.1 },
              { l: "Abr", v: 4.9 },
              { l: "Mai", v: 4.7 },
              { l: "Jun", v: 4.9 },
              { l: "Jul", v: 4.85 },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "desenvolvimento",
    label: "Desenvolvimento de Pessoas",
    title: "Desenvolvimento de Pessoas",
    desc: "Onboarding, capacitação técnica/segurança e ciclo de gestão de desempenho.",
    cards: [
      {
        title: "Cobertura de onboarding formal",
        desc: "Admitidos que concluíram a trilha corporativa + trilha de planta dentro do prazo — base para o e-NPS de onboarding.",
        tag: PRIORITY,
        value: "89",
        unit: "%",
        delta: "Meta: 95%",
        deltaTone: "bad",
        chart: (
          <BarChart
            metaLine={95}
            data={[
              { l: "Mar", v: 78 },
              { l: "Abr", v: 82 },
              { l: "Mai", v: 85 },
              { l: "Jun", v: 87 },
              { l: "Jul", v: 88 },
              { l: "Ago", v: 89 },
            ]}
          />
        ),
      },
      {
        title: "Aderência ao PDI",
        desc: "Colaboradores elegíveis com Plano de Desenvolvimento Individual registrado e revisado nos últimos 12 meses.",
        tag: PRIORITY,
        value: "61",
        unit: "%",
        delta: "Ainda distante da meta de 80%",
        deltaTone: "bad",
        chart: (
          <BarChart
            data={[
              { l: "Comerc.", v: 74 },
              { l: "Ind.", v: 48, color: "var(--chl-warning)" },
              { l: "Financ.", v: 69 },
              { l: "GG", v: 82, color: SUCCESS },
            ]}
          />
        ),
      },
      {
        title: "Aderência ao treinamento de compliance e ética",
        desc: "Cobertura dos módulos obrigatórios não técnicos — código de conduta, anticorrupção, LGPD, canal de ética.",
        tag: PRIORITY,
        value: "93",
        unit: "%",
        chart: <LineChart metaLine={95} series={[{ data: [74, 80, 85, 88, 91, 93], color: BLUE }]} />,
      },
      {
        title: "e-NPS de onboarding",
        desc: "Satisfação do novo colaborador — crítico em plantas remotas com vínculo inicial mais frágil.",
        tag: IMPORTANT,
        value: "+58",
        unit: "NPS",
        delta: "▲ 6 pts vs. trimestre anterior",
        deltaTone: "good",
        chart: <LineChart series={[{ data: [42, 46, 49, 52, 55, 58], color: BLUE }]} />,
      },
      {
        title: "Execução de entrevistas de desligamento",
        desc: "Cobertura do processo de escuta na saída.",
        tag: IMPORTANT,
        value: "94",
        unit: "%",
        chart: <LineChart series={[{ data: [80, 84, 88, 90, 92, 94], color: NAVY }]} />,
      },
      {
        title: "Horas de treinamento por colaborador",
        desc: "Trilha técnica/segurança separada de trilha comportamental — riscos regulatórios distintos.",
        tag: IMPORTANT,
        value: "14,2",
        unit: "h/mês",
        chart: (
          <BarChart
            data={[
              { l: "Técn./Seg.", v: 9.8, color: BLUE },
              { l: "Comport.", v: 4.4, color: BLUE_L },
            ]}
          />
        ),
      },
      {
        title: "Execução do ciclo de avaliação de desempenho",
        desc: "Aderência ao processo formal de avaliação de competências e resultados.",
        tag: DESIRABLE,
        value: "88",
        unit: "%",
        chart: (
          <BarChart
            data={[
              { l: "Q1", v: 81 },
              { l: "Q2", v: 85 },
              { l: "Q3", v: 88 },
            ]}
          />
        ),
      },
      {
        title: "Promoções e movimentações salariais",
        desc: "Eficiência do desenvolvimento interno e da meritocracia (exclui convenção coletiva).",
        tag: DESIRABLE,
        value: "17",
        unit: "no trimestre",
        chart: (
          <BarChart
            data={[
              { l: "Promoções", v: 9, color: BLUE },
              { l: "Mérito", v: 8, color: BLUE_L },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "esg",
    label: "Diversidade, Inclusão & ESG",
    title: "Diversidade, Inclusão & ESG",
    desc: "Evidência auditável para relatórios a investidores e licença social de operar.",
    cards: [
      {
        title: "Representatividade de gênero no quadro total",
        desc: "Participação feminina no headcount geral — métrica-base, calculável desde o dia 1 direto do cadastro.",
        tag: PRIORITY,
        chart: <Donut pct={0.29} label="29%" />,
      },
      {
        title: "Representatividade étnico-racial autodeclarada",
        desc: 'Composição racial autodeclarada do quadro — "não informado" reportado com transparência, nunca inferido.',
        tag: PRIORITY,
        chart: (
          <BarChart
            data={[
              { l: "Branca", v: 41 },
              { l: "Parda", v: 33 },
              { l: "Preta", v: 16 },
              { l: "Amarela", v: 2 },
              { l: "Indíg.", v: 1 },
              { l: "N/I", v: 7, color: GRAY_300 },
            ]}
          />
        ),
      },
      {
        title: "Cobertura do código de conduta (aceite formal)",
        desc: "Colaboradores ativos com aceite formal registrado — pilar de governança, distinto do treinamento de compliance de Desenvolvimento.",
        tag: PRIORITY,
        value: "96",
        unit: "%",
        delta: "4% pendente — prazo de 30 dias para novos admitidos",
        deltaTone: "neutral",
        chart: <LineChart metaLine={100} series={[{ data: [88, 90, 92, 94, 95, 96], color: NAVY }]} />,
      },
      {
        title: "Representatividade de gênero em liderança",
        desc: "Participação feminina em coordenação ou acima — indicador-padrão de reporte ESG.",
        tag: IMPORTANT,
        chart: <Donut pct={0.34} label="34%" />,
      },
      {
        title: "Cota de pessoas com deficiência (PCD)",
        desc: "Cumprimento da cota legal (Lei 8.213) — aplicável às operações brasileiras.",
        tag: IMPORTANT,
        chart: <Donut pct={0.87} label="87%" color="var(--chl-warning)" />,
      },
      {
        title: "Cota de jovens aprendizes",
        desc: "Cumprimento da cota legal e contribuição ao desenvolvimento das comunidades locais.",
        tag: IMPORTANT,
        chart: <Donut pct={1.02} label="102%" color={SUCCESS} />,
      },
      {
        title: "Empregabilidade local",
        desc: "Colaboradores residentes no município da planta — licença social para operar.",
        tag: DESIRABLE,
        chart: (
          <BarChart
            data={[
              { l: "UDI", v: 71 },
              { l: "Ceará", v: 88 },
              { l: "BA", v: 64 },
              { l: "Igarassu", v: 52 },
            ]}
          />
        ),
      },
    ],
  },
];

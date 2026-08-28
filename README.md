# People Pulse Dashboard

PROMPT (copiar a partir daqui)

Você vai reconstruir, em React + Tailwind, um dashboard executivo chamado People Intelligence, da Chlorum Solutions. Existe um protótipo funcional em HTML anexado a este prompt — use-o como fonte de verdade absoluta para cores, tipografia, espaçamento, ícones, animações e dados. Não reinterprete, não redesenhe, não "melhore" a identidade visual. Sua tarefa é portar fielmente o que já está pronto para uma stack de produção, e adicionar a camada de autenticação descrita no final. Onde o protótipo e este texto divergirem em algum detalhe, o protótipo HTML vence.

1. Não-negociáveis
Tipografia: título da capa ("People Intelligence") em Fraunces (serifada, sofisticada, itálico na palavra "Intelligence"). Todo o restante da interface em Nunito, peso 400 (Regular) no máximo — não use 500, 600, 700 ou 800 em nenhum lugar, nem em títulos, nem em valores de KPI, nem em badges. Essa é uma regra estrita: se parecer "sem hierarquia" pela ausência de negrito, resolva com tamanho e cor, nunca com peso de fonte.
Paleta: azul de marca 
#2a4999 (600), navy 
#202848 (superfície inversa), com a escala completa abaixo. Não introduza novas cores fora dessa paleta, exceto os semânticos de sucesso/atenção/perigo já definidos.
Ícones: os 7 ícones de linha desenhados à mão (um por área) devem ser reproduzidos exatamente como estão no SVG do protótipo — traço fino, azul de marca, dentro de um badge arredondado com fundo --chl-blue-50. Não substitua por uma biblioteca de ícones genérica (Lucide, Heroicons etc.) tentando "equivaler" — extraia o path SVG literal do protótipo.
Logo: use o arquivo de logo tal como enviado (positivo, preto + gota azul), sobre fundo claro no cabeçalho. Não recolora, não vetorize de novo, não aplique filtros.
Dados e KPIs: a lista completa de indicadores por área está na seção 4 abaixo. Nenhum indicador pode ser omitido, renomeado livremente ou ter sua "forma de apresentação" trocada (barra continua barra, linha continua linha, donut continua donut, heatmap continua heatmap).
Animações: barras crescem de baixo para cima; linhas se "desenham" da esquerda para a direita com os pontos surgindo em sequência; donuts preenchem em arco; células do heatmap aparecem em cascata. Isso deve rodar toda vez que a área é aberta, não apenas na primeira visita.
2. Tokens de design (copiar literalmente)
css
--chl-blue-900:#16264a; --chl-blue-800:#1c3266; --chl-blue-700:#223c7c;
--chl-blue-600:#2a4999; --chl-blue-500:#3a5cb8; --chl-blue-400:#5b7fd0;
--chl-blue-300:#79b7e5; --chl-blue-200:#a9d1ef; --chl-blue-100:#d6ebf8; --chl-blue-50:#f0f8fd;
--chl-navy-900:#171d33; --chl-navy-800:#202848; --chl-navy-700:#2b345c;
--chl-ink:#000000; --chl-white:#ffffff;
--chl-gray-950: oklch(18% 0.02 265); --chl-gray-900: oklch(24% 0.02 265);
--chl-gray-700: oklch(40% 0.018 265); --chl-gray-500: oklch(58% 0.014 265);
--chl-gray-300: oklch(78% 0.01 265); --chl-gray-200: oklch(87% 0.008 265);
--chl-gray-100: oklch(94% 0.006 265); --chl-gray-50: oklch(98% 0.003 265);
--chl-success: oklch(62% 0.14 155); --chl-warning: oklch(75% 0.16 80); --chl-danger: oklch(58% 0.19 25);
--radius-sm:6px; --radius-md:10px; --radius-lg:16px; --radius-xl:24px; --radius-pill:999px;
--shadow-md: 0 4px 12px hsl(220 45% 20% / 0.10), 0 1px 2px hsl(220 45% 20% / 0.06);
--font-brand: 'Nunito', sans-serif;
--font-display: 'Fraunces', Georgia, serif;

Carregue as duas fontes via Google Fonts: Nunito:ital,wght@0,200..900;1,200..900 e Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700.

3. Estrutura de páginas

Capa ("Visão Geral") — tela inicial, sempre acessível clicando na logo no cabeçalho:

Hero centralizado: eyebrow "Chlorum Solutions · Gente e Gestão", título People Intelligence (Fraunces), subtítulo curto em Nunito light.
Grade de 7 cards de ícone (um por área), cada um com badge de ícone, nome da área, descrição de uma linha, e link "Ver painel completo →". Clicar leva à área.
Coluna lateral fixa (sticky), estreita (~300px), com um índice em acordeão: cada área é uma linha; ao clicar, expande mostrando os indicadores da Onda 1 daquela área como uma lista com marcadores, mais um link "Abrir painel →".

7 áreas (nav em abas, cada uma com filtros de unidade/diretoria/período no cabeçalho, ocultos na capa):

Saúde Ocupacional
Remuneração
Produtividade
Demografia de Pessoal
Recrutamento & Seleção
Desenvolvimento de Pessoas
Diversidade, Inclusão & ESG

Cada área é uma grade de cards de KPI (título, tag de prioridade, valor atual, variação, gráfico). Remuneração tem widgets especiais adicionais: cartão de alerta de retenção, grade de budget por diretoria, heatmap grade×diretoria, histograma de distribuição de mercado, cartões de risco por diretoria. Saúde Ocupacional tem um "boletim" embutido em card navy com feed de eventos.

4. Inventário completo de indicadores (não reduzir esta lista)

Saúde Ocupacional: Conformidade de exames ocupacionais (PCMSO) · Taxa de absenteísmo por saúde · Afastamentos por doença ocupacional · Boletim semanal de acidentes (embarcado) · Monitoramento biológico de mercúrio — Igarassu · Cobertura de campanhas de saúde e vacinação · Riscos psicossociais (NR-1) · Atendimentos ambulatoriais internos

Remuneração: Compa-ratio consolidado · Compa-ratio por diretoria · Colaboradores abaixo do mínimo da faixa · Alertas de risco de retenção por defasagem salarial · Budget do ciclo por diretoria · Heatmap de posicionamento de mercado (Grade × Diretoria) · Distribuição de posição de mercado · Risco de defasagem por diretoria · Equidade salarial por gênero

Produtividade de Headcount: Lucro / Headcount · Resultado / Custo de Headcount · Receita / Headcount (referência) · Custo de pessoal / Headcount · Produção de Cloro por Headcount (t Cl₂/HC) · Folha por ECU (Payroll/ECU) · Composição de headcount por função · Custo de hora extra / Headcount

Demografia de Pessoal: Quadro de pessoal · Custo total de pessoal · Custo médio de pessoal · Admissões · Desligamentos · Taxa de desligamento (turnover) · Turnover do período de experiência

Recrutamento & Seleção: Vagas abertas / Vagas fechadas · Time to hire / Time to fill · Cumprimento de SLA de recrutamento · Vagas pendentes de abertura · Custo de recrutamento por vaga

Desenvolvimento de Pessoas: Cobertura de onboarding formal · Aderência ao PDI · Aderência ao treinamento de compliance e ética · e-NPS de onboarding · Execução de entrevistas de desligamento · Colaboradores treinados e horas de treinamento · Ciclo de avaliação de desempenho · Promoções e movimentações salariais

Diversidade, Inclusão & ESG: Representatividade de gênero no quadro total · Representatividade étnico-racial autodeclarada · Cobertura do código de conduta (aceite formal) · Representatividade de gênero em liderança · Contratação e alocação de PCD · Contratação de jovens aprendizes · Empregabilidade local

Use os mesmos valores de exemplo do protótipo (dados fictícios, mas coerentes) até que uma fonte real seja conectada.

5. Autenticação (novo — não existe no protótipo HTML)

Adicione uma tela de login antes de qualquer acesso ao dashboard:

Campos: e-mail corporativo e senha. Validação de formato exige domínio corporativo da Chlorum (ex.: @chlorumsolutions.com — confirme o domínio exato com TI antes de travar essa regra em produção; por ora, trate como validação de padrão, não como autenticação real).
Visual da tela de login: mesma identidade — logo Chlorum centralizada, fundo claro, card com sombra suave (--shadow-md), inputs com bordas --border-default e foco em --chl-blue-300. Título em Fraunces ("People Intelligence"), microcópia em Nunito regular.
Sem backend real por enquanto: não conecte Supabase nem qualquer provedor de auth agora. Implemente como estado local mockado (ex.: aceitar qualquer combinação de e-mail com domínio válido + senha não vazia, armazenar sessão em memória/contexto React). Deixe comentado no código onde entraria a integração real de SSO (SAML/OAuth corporativo) quando chegar a hora.
Após login, extraia o nome a partir do e-mail (parte antes do @, capitalizada) e guarde em contexto de sessão.

No cabeçalho: exiba o nome da pessoa logada de forma discreta — texto pequeno, --text-muted, alinhado à direita, ao lado (ou abaixo) dos filtros, sem competir visualmente com a logo. Não use avatar chamativo nem badge colorido; é para ser elegante e silencioso, não um elemento de destaque.

No rodapé: adicione uma barra de rodapé fixa ou ao final da página com o status de atividade do colaborador logado — por exemplo, um indicador de ponto verde + texto "Sessão ativa" e horário de início da sessão, em Nunito regular pequeno, cor --text-muted. Novamente, discreto — é informação de contexto, não uma métrica do dashboard.

Inclua um botão de logout acessível (pode ficar junto ao nome no cabeçalho), que limpa a sessão e retorna à tela de login.

6. Restrições técnicas
Não use Supabase, banco de dados ou qualquer persistência real neste momento — tudo em estado local (React Context ou similar).
Não adicione bibliotecas de gráficos pesadas (Recharts, Chart.js) se não forem necessárias — os gráficos do protótipo são SVG customizados simples (barra, linha, donut, heatmap em tabela) e podem ser portados quase diretamente.
Mantenha a página responsiva, mas o público principal é desktop/laptop (uso executivo).
Não adicione anúncios, marcas d'água ou qualquer elemento fora da identidade Chlorum.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://chlorum-people-pulse.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/30744267-c8a9-4685-b700-ddda0d3c5999).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

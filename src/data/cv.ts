export type Language = { name: string; level: string };

export type Experience = {
  id: string;
  role: { es: string; en: string };
  company: string;
  context?: { es: string; en: string };
  period: { es: string; en: string };
  scope?: { es: string; en: string };
  teams?: { es: string[]; en: string[] };
  bullets: { es: string[]; en: string[] };
  metrics?: string[];
};

export type Education = {
  id: string;
  degree: { es: string; en: string };
  institution: string;
  period: string;
  distinction?: { es: string; en: string };
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  category:
    | "ai"
    | "google"
    | "paid-media"
    | "ecommerce"
    | "inbound"
    | "engineering";
};

export type SkillGroup = {
  id: string;
  label: { es: string; en: string };
  items: string[];
};

export const personal = {
  name: "Felipe Rubio",
  fullName: "Felipe Rubio Fernández",
  headline: {
    es: "Head of Paid Media + AI builder",
    en: "Head of Paid Media + AI builder",
  },
  location: { es: "Las Condes, Santiago · Chile", en: "Las Condes, Santiago · Chile" },
  email: "felipe.rubio11@gmail.com",
  phone: "+56 9 5718 2812",
  linkedin: "https://www.linkedin.com/in/felipe-rubio-fernandez",
  github: "https://github.com/feliperubiof",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "English", level: "Intermediate" },
    { name: "Português", level: "Intermediário" },
  ] satisfies Language[],
};

export const headlineMetrics = [
  { value: "USD 2M+", labelKey: "managed" },
  { value: "30+", labelKey: "apis" },
  { value: "14x", labelKey: "roas" },
  { value: "5+", labelKey: "years" },
  { value: "6", labelKey: "projectsProd" },
  { value: "25+", labelKey: "consultancy" },
] as const;

export const experience: Experience[] = [
  {
    id: "concha-y-toro",
    role: {
      es: "Head of Paid Media · Ecommerce & Turismo",
      en: "Head of Paid Media · Ecommerce & Tourism",
    },
    company: "Viña Concha y Toro · Descorcha.com",
    context: {
      es: "Global · Performance · Alianzas · PR · Loyalty · Data · Ecommerce",
      en: "Global · Performance · Partnerships · PR · Loyalty · Data · Ecommerce",
    },
    period: { es: "Noviembre 2023 — Actual", en: "November 2023 — Present" },
    teams: {
      es: ["Paid Media", "Ecommerce (2)", "Paid Media Turismo (4)", "Diseño UX", "Alianzas & PR", "Agencias externas"],
      en: ["Paid Media", "Ecommerce (2)", "Paid Media Tourism (4)", "UX Design", "Partnerships & PR", "External agencies"],
    },
    bullets: {
      es: [
        "Dirección estratégica de inversión digital para ecommerce en Chile, Brasil y México: USD 150K anuales con ROAS 11x",
        "El canal de pago aportó 44% al crecimiento total del ecommerce (hasta +25% YoY)",
        "Supervisión de inversión global en turismo: USD 200K anuales, presencia en +20 países, ROAS 14x",
        "Plataformas: Google Ads, Meta Ads, LinkedIn Ads y Microsoft Ads en B2C y B2B",
        "Cierre y gestión de alianzas con Scotiabank, BCI, Uber, Consorcio y Sura: USD 300K en ingresos directos anuales, +15K nuevos usuarios y +2K recurrentes",
        "Diseño del programa loyalty Descorcha.com: +20% retención en los primeros 6 meses",
        "Dashboard de seguimiento de productos y servicios para estandarizar la medición de venta por canal",
        "Arquitectura de UTMs unificada para Ecommerce y Turismo",
      ],
      en: [
        "Strategic direction of digital investment for ecommerce across Chile, Brazil, and Mexico: USD 150K/year with 11x ROAS",
        "Paid channel contributed 44% to total ecommerce growth (up to +25% YoY)",
        "Global tourism investment oversight: USD 200K/year, presence in 20+ countries, 14x ROAS",
        "Platforms: Google Ads, Meta Ads, LinkedIn Ads, Microsoft Ads across B2C and B2B",
        "Closed and managed partnerships with Scotiabank, BCI, Uber, Consorcio, and Sura: USD 300K direct revenue/year, +15K new users, +2K returning",
        "Designed Descorcha.com loyalty program: +20% retention in first 6 months",
        "Product/service tracking dashboard standardizing sales measurement by channel",
        "Unified UTM architecture across Ecommerce and Tourism units",
      ],
    },
    metrics: ["ROAS 11x Ecommerce", "ROAS 14x Turismo", "+25% growth", "+20% retención", "USD 350K presupuesto"],
  },
  {
    id: "consultor-digital",
    role: {
      es: "Consultor Digital · AI-Driven Marketing",
      en: "Digital Consultant · AI-Driven Marketing",
    },
    company: "Freelance",
    period: { es: "Noviembre 2023 — Actual", en: "November 2023 — Present" },
    bullets: {
      es: [
        "+25 proyectos en 7+ industrias (alimentos, inmobiliaria, textil, movilidad, decoración, marca personal)",
        "Estrategias digitales integrales impulsadas por IA, a medida por cliente",
        "Campañas en Google Ads, Meta Ads, TikTok Ads y otras según objetivo y rubro",
        "Sitios web con IA, chatbots con flujos especializados, reportería y conversiones 100% automatizadas con GTM/GA4/UTMs",
      ],
      en: [
        "+25 projects across 7+ industries (food, real estate, textile, mobility, decor, personal brand)",
        "End-to-end AI-driven digital strategies, custom per client",
        "Campaigns on Google Ads, Meta Ads, TikTok Ads and others based on goal and vertical",
        "AI-built websites, specialized chatbots, automated reporting and conversion tracking via GTM/GA4/UTMs",
      ],
    },
    metrics: ["+25 proyectos", "7+ industrias"],
  },
  {
    id: "capitaria-jefe-mkt",
    role: { es: "Jefe de Marketing (interino)", en: "Marketing Lead (interim)" },
    company: "Capitaria · Servicios de Inversiones",
    period: { es: "Marzo 2023 — Octubre 2023", en: "March 2023 — October 2023" },
    teams: {
      es: ["Pauta Digital", "Comunidad & Contenido", "Diseño Creativo", "SEO"],
      en: ["Paid Media", "Community & Content", "Creative Design", "SEO"],
    },
    bullets: {
      es: [
        "Apariciones en Emol, Diario Financiero, La Tercera, CNN Chile y T13",
        "Evento presencial +100 clientes de alto patrimonio con stream simultáneo a +8.000 personas",
        "Estrategia 360° coordinando equipos multidisciplinarios de 3 personas",
        "Presupuesto USD 30K anuales",
        "Estrategia influencer marketing con creadores +1M seguidores",
        "Lanzamiento del nuevo sitio web corporativo",
      ],
      en: [
        "Press in Emol, Diario Financiero, La Tercera, CNN Chile, T13",
        "In-person event for 100+ high-net-worth clients with 8,000+ live stream",
        "360° strategy across multidisciplinary teams of 3",
        "USD 30K annual budget",
        "Influencer marketing with creators with +1M followers",
        "New corporate website launch",
      ],
    },
    metrics: ["PR Tier 1", "+100 evento · 8K stream", "Influencers +1M", "USD 30K"],
  },
  {
    id: "capitaria-sm-seo",
    role: { es: "Social Media Manager / SEO Manager", en: "Social Media / SEO Manager" },
    company: "Capitaria · Servicios de Inversiones",
    period: { es: "Marzo 2021 — Marzo 2023", en: "March 2021 — March 2023" },
    bullets: {
      es: [
        "Coordinación de equipos multidisciplinarios de redes sociales con gestión multicanal",
        "Posicionamiento de marca y productos con SEO evergreen y contenido vinculado al blog",
        "Implementación avanzada de Semrush para análisis de tráfico y benchmarking competitivo",
        "Ecosistema RRSS + SEO + contenidos orientado a tráfico orgánico constante",
      ],
      en: [
        "Multidisciplinary social media team coordination across channels",
        "Brand and product positioning via evergreen SEO + blog content",
        "Advanced Semrush implementation for traffic analytics and competitive benchmarking",
        "Integrated social + SEO + content ecosystem driving sustained organic traffic",
      ],
    },
  },
  {
    id: "capitaria-cm",
    role: { es: "Community Manager / Content Manager", en: "Community / Content Manager" },
    company: "Capitaria · Servicios de Inversiones",
    period: { es: "Septiembre 2020 — Marzo 2021", en: "September 2020 — March 2021" },
    bullets: {
      es: [
        "+44.000 seguidores Instagram desde cero, sin pauta",
        "+8.000 suscriptores YouTube con estrategia de video y SEO",
        "Canal YouTube monetizado con seguimiento de venta directa",
        "Calendario editorial SEO orientado a prospección y fidelización",
      ],
      en: [
        "+44,000 Instagram followers from zero, organic only",
        "+8,000 YouTube subscribers with video + SEO strategy",
        "Monetized YouTube channel with direct-sale tracking",
        "SEO editorial calendar for prospecting and retention",
      ],
    },
    metrics: ["+44K IG orgánico", "+8K YouTube"],
  },
  {
    id: "atacama-rally",
    role: { es: "Jefe de Prensa", en: "Press Lead" },
    company: "Atacama Rally · Mundial Cross Country",
    period: { es: "Septiembre 2018 — Octubre 2018", en: "September 2018 — October 2018" },
    bullets: {
      es: [
        "Coordinación de puntos de prensa entre competidores y medios nacionales e internacionales",
        "Gestión del equipo periodístico interno",
        "Fiscalización del contenido generado en competencia",
      ],
      en: [
        "Press-point coordination between competitors and national/international media",
        "In-house press team management",
        "Editorial oversight of competition content",
      ],
    },
  },
];

export const education: Education[] = [
  {
    id: "unab-periodismo",
    degree: { es: "Periodismo", en: "Journalism" },
    institution: "Universidad Andrés Bello",
    period: "2015 — 2020",
    distinction: { es: "Distinción académica", en: "Academic distinction" },
  },
  {
    id: "ltc-english",
    degree: { es: "Certificación Inglés Británico", en: "British English Certification" },
    institution: "LTC English Institute",
    period: "2013",
    distinction: { es: "Upper Intermediate", en: "Upper Intermediate" },
  },
];

export const certifications: Certification[] = [
  { id: "cc-action", name: "Claude Code in Action", issuer: "Anthropic Academy", category: "ai" },
  { id: "ai-mkt", name: "AI for Marketing", issuer: "HubSpot Academy", category: "ai" },
  { id: "g-ads", name: "Google Ads Advanced", issuer: "Google Skillshop", category: "google" },
  { id: "g-ga", name: "Google Analytics Advanced", issuer: "Google Skillshop", category: "google" },
  { id: "g-gtm", name: "Google Tag Manager", issuer: "Google Skillshop", category: "google" },
  { id: "g-looker", name: "Looker Studio", issuer: "Google Skillshop", category: "google" },
  { id: "meta", name: "Meta Ads Advanced", issuer: "Meta Blueprint", category: "paid-media" },
  { id: "tiktok", name: "TikTok Ads Certification", issuer: "TikTok for Business", category: "paid-media" },
  { id: "linkedin-ads", name: "LinkedIn Marketing Labs", issuer: "LinkedIn", category: "paid-media" },
  { id: "shopify", name: "Shopify Partner", issuer: "Shopify", category: "ecommerce" },
  { id: "ux", name: "Digital User Experience", issuer: "Coderhouse", category: "ecommerce" },
  { id: "po", name: "Product Owner Leadership", issuer: "Coderhouse", category: "ecommerce" },
  { id: "inbound", name: "Inbound Marketing", issuer: "HubSpot Academy", category: "inbound" },
  { id: "smm", name: "Social Media Marketing", issuer: "HubSpot Academy", category: "inbound" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-automation",
    label: { es: "IA & Automatización", en: "AI & Automation" },
    items: [
      "Claude / Claude Code",
      "Anthropic API (Sonnet 4.6)",
      "OpenRouter",
      "ChatGPT / Copilot",
      "Perplexity",
      "n8n",
      "KIE.ai (Flux, Imagen, Ideogram, Grok, Seedream)",
      "Sitios con IA",
      "Chatbots",
      "Reportería automática",
    ],
  },
  {
    id: "ad-platforms",
    label: { es: "Plataformas de Publicidad", en: "Ad Platforms" },
    items: ["Google Ads (incl. MCC)", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Microsoft Ads"],
  },
  {
    id: "data-analytics",
    label: { es: "Datos & Análisis", en: "Data & Analytics" },
    items: [
      "GA4 Data API",
      "Google Tag Manager",
      "Google Search Console",
      "Google Merchant Center",
      "Google Business Profile",
      "Looker Studio",
      "Semrush",
      "HubSpot",
      "Salesforce",
      "Bloomreach",
      "Insider",
      "Google Cloud",
    ],
  },
  {
    id: "channels-execution",
    label: { es: "Canales & Ejecución", en: "Channels & Execution" },
    items: [
      "SEM",
      "SEO",
      "Paid Media",
      "Estrategia de Contenido",
      "Social Media",
      "Email Marketing / CRM",
      "Ecommerce (Shopify)",
    ],
  },
  {
    id: "strategy-leadership",
    label: { es: "Estrategia & Liderazgo", en: "Strategy & Leadership" },
    items: [
      "MKT 360",
      "Brand Strategy",
      "Alianzas Corporativas",
      "PR & Medios",
      "Eventos & Activaciones",
      "Influencer Marketing",
      "Equipos multidisciplinarios",
      "Planning & Budget",
    ],
  },
  {
    id: "engineering",
    label: { es: "Backend & Infra Engineering", en: "Backend & Infra Engineering" },
    items: [
      "Next.js 16 / React 19",
      "TypeScript",
      "FastAPI · Python 3.12",
      "SQLAlchemy 2 (async)",
      "PostgreSQL · asyncpg",
      "Redis · BullMQ",
      "Stripe (subs + webhooks)",
      "OAuth2 · JWT · AES-256-GCM",
      "Tailwind CSS 4 · shadcn/ui",
      "Vercel · Railway · Cloudflare Workers",
      "GitHub Actions · CI/CD",
    ],
  },
];

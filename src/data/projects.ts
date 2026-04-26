export type ProjectTier = "destacado" | "secundario";

export type Project = {
  slug: string;
  name: string;
  tier: ProjectTier;
  tagline: { es: string; en: string };
  summary: { es: string; en: string };
  role: { es: string; en: string };
  year: string;
  client?: string;
  url?: string;
  stack: string[];
  apis: string[];
  highlights: { es: string[]; en: string[] };
  metrics?: { value: string; label: { es: string; en: string } }[];
  category: { es: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "concha-y-toro",
    name: "Concha y Toro · Descorcha",
    tier: "destacado",
    year: "2023 — Actual",
    client: "Viña Concha y Toro",
    tagline: {
      es: "Operación de paid media multi-país para una viña global",
      en: "Multi-country paid media operations for a global winery",
    },
    summary: {
      es: "Como Head of Paid Media dirijo la inversión digital de Descorcha (Ecommerce + Turismo) en Chile, Brasil y México. Para cerrar la brecha entre lo que decía la agencia y lo que necesitaba el negocio, construí 3 módulos en Python que ingieren Google Ads + Meta + GA4, normalizan ROAS con FX histórico día a día y producen reportes ejecutivos en PDF cada lunes.",
      en: "As Head of Paid Media I run Descorcha's digital investment (Ecommerce + Tourism) across Chile, Brazil, and Mexico. To close the gap between what the agency said and what the business needed, I built 3 Python modules that ingest Google Ads + Meta + GA4, normalize ROAS with daily historical FX, and produce executive PDF reports every Monday.",
    },
    role: { es: "Head of Paid Media + Builder", en: "Head of Paid Media + Builder" },
    stack: ["Python 3.11", "SQLite", "FPDF2", "Pandas"],
    apis: ["Google Ads API", "GA4 Data API", "Meta Ads API", "Shopify"],
    highlights: {
      es: [
        "ROAS 11x Ecommerce · 14x Turismo · USD 350K presupuesto anual",
        "Multi-país: Chile (CLP) + Brasil (BRL) con FX histórico día por día",
        "3 módulos: Brain (orquestación), UTM Constructor, ROAS Cleaner",
        "Reportería ejecutiva semanal: Portfolio · Evolution · Decisions",
        "Detección automática de anomalías (IS Lost > 20%, ROAS < 4x, canibalización, frecuencia alta)",
        "Change lifecycle de 7 fases con checkpoints T+7/T+14/T+21",
        "Alianzas con Scotiabank, BCI, Uber, Consorcio y Sura: USD 300K en ingresos directos",
      ],
      en: [
        "11x ROAS Ecommerce · 14x ROAS Tourism · USD 350K annual budget",
        "Multi-country: Chile (CLP) + Brazil (BRL) with day-by-day historical FX",
        "3 modules: Brain (orchestration), UTM Constructor, ROAS Cleaner",
        "Weekly executive reporting: Portfolio · Evolution · Decisions",
        "Automated anomaly detection (Lost IS > 20%, ROAS < 4x, cannibalization, high frequency)",
        "7-phase change lifecycle with T+7/T+14/T+21 checkpoints",
        "Partnerships with Scotiabank, BCI, Uber, Consorcio, Sura: USD 300K direct revenue",
      ],
    },
    metrics: [
      { value: "14x", label: { es: "ROAS Turismo", en: "Tourism ROAS" } },
      { value: "11x", label: { es: "ROAS Ecommerce", en: "Ecommerce ROAS" } },
      { value: "USD 350K", label: { es: "presupuesto anual", en: "annual budget" } },
      { value: "3", label: { es: "países LATAM", en: "LATAM countries" } },
    ],
    category: { es: "Performance Marketing", en: "Performance Marketing" },
  },
  {
    slug: "rocketmonk",
    name: "RocketMonk",
    tier: "destacado",
    year: "2024 — Actual",
    url: "https://rocketmonk.io",
    tagline: {
      es: "SaaS multi-tenant de Performance Marketing Intelligence con IA integrada",
      en: "Multi-tenant Performance Marketing Intelligence SaaS with embedded AI",
    },
    summary: {
      es: "RocketMonk conecta 19 APIs profesionales (Google Ads MCC, GA4, Meta, Microsoft, Stripe, Anthropic Claude, KIE.ai con 7 modelos de imagen) en un dashboard multi-tenant con chat IA que analiza campañas, genera gráficos inline y automatiza decisiones por tier de suscripción. Es la generalización productizada de la operación que llevo años liderando.",
      en: "RocketMonk connects 19 professional APIs (Google Ads MCC, GA4, Meta, Microsoft, Stripe, Anthropic Claude, KIE.ai with 7 image models) in a multi-tenant dashboard with AI chat that analyzes campaigns, generates inline charts, and automates decisions per subscription tier. It's the productized generalization of the operation I've led for years.",
    },
    role: { es: "Founder · Full-stack engineer", en: "Founder · Full-stack engineer" },
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "shadcn/ui (Base UI)",
      "FastAPI",
      "SQLAlchemy 2 async",
      "PostgreSQL",
      "Redis",
      "Sentry",
    ],
    apis: [
      "Google Ads (MCC)",
      "GA4 Data API",
      "Search Console",
      "Merchant Center",
      "Google Business Profile",
      "Meta Ads",
      "Microsoft Ads",
      "Anthropic Claude (Sonnet 4.6)",
      "OpenRouter",
      "KIE.ai (Flux, Imagen 4 Ultra, Ideogram v3, Grok, Seedream 3.0)",
      "Stripe (billing + webhooks)",
      "Telegram Bot",
      "Resend",
    ],
    highlights: {
      es: [
        "19 APIs profesionales integradas en producción",
        "Multi-tenant: Organización → Cuentas de paid media → 17 tablas con audit trail",
        "Chat IA con artefactos inline (bar_chart, line_chart, table) usando Claude Sonnet 4.6",
        "41 routers FastAPI · 608 archivos Python · 170 tests automatizados",
        "Sistema de tiers de automatización (1-3) con gating por suscripción Stripe",
        "Encryption-at-rest AES-256-GCM para credenciales OAuth de clientes",
        "Multi-currency en vivo USD ↔ CLP",
        "Brand Voice Trainer + Asset Library + Creative Pipeline",
      ],
      en: [
        "19 professional APIs in production",
        "Multi-tenant: Organization → Paid media accounts → 17 tables with audit trail",
        "AI chat with inline artifacts (bar_chart, line_chart, table) powered by Claude Sonnet 4.6",
        "41 FastAPI routers · 608 Python files · 170 automated tests",
        "3-tier automation system gated by Stripe subscription",
        "AES-256-GCM encryption-at-rest for client OAuth credentials",
        "Live multi-currency USD ↔ CLP",
        "Brand Voice Trainer + Asset Library + Creative Pipeline",
      ],
    },
    metrics: [
      { value: "19", label: { es: "APIs integradas", en: "APIs integrated" } },
      { value: "41", label: { es: "endpoints", en: "endpoints" } },
      { value: "17", label: { es: "tablas multi-tenant", en: "multi-tenant tables" } },
      { value: "170", label: { es: "tests", en: "tests" } },
    ],
    category: { es: "SaaS · AI · Marketing", en: "SaaS · AI · Marketing" },
  },
  {
    slug: "personal-brand-suite",
    name: "Personal Brand Suite",
    tier: "destacado",
    year: "2024 — Actual",
    tagline: {
      es: "SaaS de creación, repurposing y publicación multi-red con IA",
      en: "Multi-network content SaaS — creation, repurposing, publishing with AI",
    },
    summary: {
      es: "Plataforma para creadores y agencias que automatiza la generación de posts con Claude, los adapta a LinkedIn, X e Instagram (1→N), entrena un Brand Voice por industria y publica en horarios programados con BullMQ. Construido como monorepo pnpm + uv con tipos Zod compartidos entre frontend, backend y workers. Como prueba de concepto personal corre en GitHub Actions + Cloudflare Workers + Telegram para mi propia presencia en LinkedIn.",
      en: "Platform for creators and agencies that automates post generation with Claude, adapts content to LinkedIn, X, and Instagram (1→N), trains a Brand Voice per industry, and publishes on schedule via BullMQ. Built as a pnpm + uv monorepo with shared Zod types across frontend, backend, and workers. The personal proof-of-concept runs on GitHub Actions + Cloudflare Workers + Telegram for my own LinkedIn presence.",
    },
    role: { es: "Founder · Full-stack engineer", en: "Founder · Full-stack engineer" },
    stack: [
      "Next.js 15",
      "FastAPI",
      "BullMQ + Redis 7",
      "PostgreSQL 16",
      "TypeScript + Zod",
      "Python · uv",
      "pnpm workspaces",
      "Docker Compose",
    ],
    apis: [
      "LinkedIn API (OAuth2)",
      "X API",
      "Instagram Graph API",
      "Anthropic Claude",
      "KIE.ai",
      "Telegram Bot",
      "GitHub Actions",
      "Cloudflare Workers",
    ],
    highlights: {
      es: [
        "Monorepo con tipos Zod compartidos entre frontend, backend y workers",
        "Repurposing 1 → N: un post se adapta automáticamente a LinkedIn, X e Instagram",
        "Brand Voice Trainer entrenado por industria",
        "Publicación programada con BullMQ + Redis",
        "Prueba personal en producción: cron miércoles 9am genera, lunes 9am publica, aprobación vía GitHub Issues + Telegram",
        "Renovación automática de tokens OAuth (LinkedIn ~60 días)",
      ],
      en: [
        "Monorepo with shared Zod types across frontend, backend, and workers",
        "1 → N repurposing: one post auto-adapts to LinkedIn, X, and Instagram",
        "Industry-tuned Brand Voice Trainer",
        "Scheduled publishing with BullMQ + Redis",
        "Personal proof in production: cron Wed 9am generates, Mon 9am publishes, approval via GitHub Issues + Telegram",
        "Automatic OAuth token rotation (LinkedIn ~60 days)",
      ],
    },
    metrics: [
      { value: "3", label: { es: "redes sociales", en: "social networks" } },
      { value: "1→N", label: { es: "repurposing automático", en: "automated repurposing" } },
    ],
    category: { es: "SaaS · Content · AI", en: "SaaS · Content · AI" },
  },
  {
    slug: "rf-consultores",
    name: "R&F Consultores Financieros",
    tier: "secundario",
    year: "2025",
    client: "R&F Consultores Financieros",
    tagline: {
      es: "Sitio corporativo bilingüe para firma chilena de valuación y corporate finance",
      en: "Bilingual corporate site for a Chilean valuation and corporate finance firm",
    },
    summary: {
      es: "Sitio corporativo en Next.js 16 con detección automática de país (ES-CL por defecto, EN para resto), Server Actions para el formulario de contacto vía Resend, hardening de seguridad (CSP, honeypot, rate limit, sanitización Zod) y SEO técnico optimizado (Core Web Vitals, JSON-LD).",
      en: "Corporate site in Next.js 16 with automatic country detection (ES-CL by default, EN otherwise), Server Actions for the contact form via Resend, security hardening (CSP, honeypot, rate limit, Zod sanitization), and technical SEO (Core Web Vitals, JSON-LD).",
    },
    role: { es: "Diseño + desarrollo end-to-end", en: "End-to-end design + development" },
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl 4", "Resend", "Zod"],
    apis: ["Resend (email)"],
    highlights: {
      es: [
        "Bilingüe ES/EN con routing automático por país",
        "Server Actions para contacto (sin JS en cliente)",
        "Security hardening: CSP estricta, HSTS, honeypot, rate-limit por IP",
        "JSON-LD: LocalBusiness, BreadcrumbList, FAQSchema",
        "Core Web Vitals optimizadas (Next.js 16 + Turbopack)",
        "Design system documentado en navy/crema/dorado corporativo",
      ],
      en: [
        "Bilingual ES/EN with country-based automatic routing",
        "Server Actions for contact form (no client-side JS)",
        "Security hardening: strict CSP, HSTS, honeypot, IP rate limiting",
        "JSON-LD: LocalBusiness, BreadcrumbList, FAQSchema",
        "Optimized Core Web Vitals (Next.js 16 + Turbopack)",
        "Documented design system in corporate navy/cream/gold",
      ],
    },
    category: { es: "Sitio corporativo", en: "Corporate site" },
  },
  {
    slug: "pack-and-print",
    name: "Pack & Print",
    tier: "secundario",
    year: "2025",
    tagline: {
      es: "Landing 3D interactivo para imprenta — Three.js + Framer Motion",
      en: "Interactive 3D landing for a print shop — Three.js + Framer Motion",
    },
    summary: {
      es: "Landing y catálogo con visualización 3D interactiva (Canvas + Three.js), simulador de presupuesto inline, scroll animado con Lenis y Framer Motion, multi-idioma con next-intl. Demuestra capacidades de UX visual storytelling más allá de dashboards data-driven.",
      en: "Landing and catalog with interactive 3D visualization (Canvas + Three.js), inline quote simulator, animated scroll via Lenis and Framer Motion, multi-language via next-intl. Showcases visual storytelling beyond data-driven dashboards.",
    },
    role: { es: "Diseño + desarrollo end-to-end", en: "End-to-end design + development" },
    stack: [
      "Next.js 16",
      "React 19",
      "Three.js",
      "@react-three/fiber",
      "@react-three/drei",
      "Framer Motion",
      "Lenis",
      "Tailwind CSS 4",
      "next-intl 4",
    ],
    apis: [],
    highlights: {
      es: [
        "Visualización 3D interactiva en Canvas (Three.js + R3F)",
        "Smooth scroll con Lenis + animaciones Framer Motion",
        "Simulador de presupuesto inline con React Hook Form + Zod",
        "29+ secciones (Hero, Process, Industries, Sustainability, FAQ, etc.)",
        "Animaciones de contadores, parallax, scroll progress",
      ],
      en: [
        "Interactive 3D visualization in Canvas (Three.js + R3F)",
        "Smooth scroll via Lenis + Framer Motion animations",
        "Inline quote simulator with React Hook Form + Zod",
        "29+ sections (Hero, Process, Industries, Sustainability, FAQ, etc.)",
        "Counter animations, parallax, scroll progress",
      ],
    },
    category: { es: "Landing 3D · UX", en: "3D Landing · UX" },
  },
];

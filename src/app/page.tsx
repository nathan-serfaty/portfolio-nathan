import Link from "next/link";

type Project = {
  name: string;
  url: string;
  tagline: string;
  role: "Solo build" | "Under NSJ" | "Client feature";
  stack: string;
  year: string;
  status: "Live" | "Shipping" | "In build";
};

const projects: Project[] = [
  {
    name: "esmiles.ai",
    url: "https://esmiles.ai",
    tagline: "AI platform for orthodontists. Patient journeys, automated.",
    role: "Solo build",
    stack: "Next.js · Postgres · OpenAI",
    year: "2025",
    status: "Live",
  },
  {
    name: "destokr.com",
    url: "https://destokr.com",
    tagline: "Inventory clearance marketplace for B2B sellers.",
    role: "Solo build",
    stack: "Next.js · Supabase · Stripe",
    year: "2025",
    status: "Live",
  },
  {
    name: "dataanalyse.fr",
    url: "https://dataanalyse.fr",
    tagline: "Data consulting platform turning ops numbers into action.",
    role: "Solo build",
    stack: "Next.js · Python · BigQuery",
    year: "2025",
    status: "Live",
  },
  {
    name: "theremin.fr",
    url: "https://theremin.fr",
    tagline: "Editorial site for a Paris based music project.",
    role: "Solo build",
    stack: "Next.js · CMS",
    year: "2025",
    status: "Live",
  },
  {
    name: "AI Receptionist (NDA)",
    url: "#",
    tagline: "Voice AI front desk SaaS. Answering, qualifying, booking 24/7.",
    role: "Under NSJ",
    stack: "Next.js · Twilio · LLM agents",
    year: "2026",
    status: "Shipping",
  },
  {
    name: "Founder Landing (NDA)",
    url: "#",
    tagline: "SEO first landing for an entrepreneur scaling his personal brand.",
    role: "Under NSJ",
    stack: "Next.js · MDX · Design system",
    year: "2026",
    status: "Shipping",
  },
  {
    name: "Israeli SaaS feature",
    url: "#",
    tagline: "Embedded feature for a YC style early stage startup.",
    role: "Client feature",
    stack: "Contract work",
    year: "2025",
    status: "Live",
  },
];

const services = [
  {
    n: "01",
    title: "SaaS platforms",
    body: "From schema to ship. Auth, billing, dashboards, AI features. The boring parts done right so the product stays sharp.",
  },
  {
    n: "02",
    title: "AI products",
    body: "Voice agents, copilots, internal tools. We pick the model, wire the gateway, and ship something that feels native, not bolted on.",
  },
  {
    n: "03",
    title: "Landing pages that convert",
    body: "Premium SEO landings written like editorial, engineered for speed, designed by a Penninghen trained eye.",
  },
  {
    n: "04",
    title: "Design systems",
    body: "Components, tokens, motion. A visual language your product can keep growing inside without going generic.",
  },
];

const principles = [
  {
    k: "01",
    t: "Ship the boring layer well",
    d: "Auth, payments, observability, migrations. Invisible when right, ruinous when wrong.",
  },
  {
    k: "02",
    t: "Design is the moat",
    d: "Anyone can wire an API. A product that feels like it was made on purpose is rare. And it pays.",
  },
  {
    k: "03",
    t: "Two people, one taste",
    d: "Small team, tight loop. The engineer and the designer in the same room means decisions in hours, not weeks.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Background />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Manifesto />
        <Work />
        <Duo />
        <Services />
        <Principles />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 mx-auto max-w-[1400px] grid-lines opacity-60" />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
            NSJ ·
          </span>
          <span className="font-display text-2xl italic leading-none">
            Nathan Serfaty
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)] md:flex">
          <a href="#manifesto" className="hover:text-[var(--color-ink)]">
            Manifesto
          </a>
          <a href="#work" className="hover:text-[var(--color-ink)]">
            Work
          </a>
          <a href="#duo" className="hover:text-[var(--color-ink)]">
            Duo
          </a>
          <a href="#services" className="hover:text-[var(--color-ink)]">
            Services
          </a>
          <a href="#contact" className="hover:text-[var(--color-ink)]">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent-soft)] animate-pulse-dot" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          Open for one project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 mb-10 flex items-center justify-between md:col-span-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
            Paris · Île de France
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
            File · 01 / Personal brand
          </span>
        </div>

        <h1 className="col-span-12 font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.92] tracking-tight animate-fade-up">
          I build
          <span className="italic text-[var(--color-accent)]"> SaaS </span>
          <br className="hidden sm:block" />
          that <span className="italic">actually ships.</span>
        </h1>

        <div className="col-span-12 mt-10 grid grid-cols-12 gap-6">
          <p className="col-span-12 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)] md:col-span-7 md:text-xl">
            I&apos;m Nathan, a fullstack engineer based in Paris. I design
            architectures, write the code, and put products in front of real
            users. Solo I&apos;ve shipped four live SaaS. With my cofounder
            Jeremy I built{" "}
            <span className="font-display italic text-[var(--color-ink)]">
              NSJ Agency
            </span>
            , a small studio that wraps engineering inside Penninghen grade
            design, so clients buy a product, not a build.
          </p>
          <div className="col-span-12 flex flex-col items-start gap-4 md:col-span-5 md:items-end">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
              ↳ Currently
            </div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 p-5 text-right md:max-w-xs">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-mute)]">
                Q2 2026
              </div>
              <div className="mt-1 font-display text-2xl italic leading-tight">
                Shipping an AI voice receptionist and a founder landing under NSJ.
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-16 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
          >
            View live products →
          </a>
          <a
            href="https://nsjagency.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
          >
            nsjagency.com ↗
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-2 px-2 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          >
            Read the thesis
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Fullstack Engineer",
    "SaaS Architect",
    "Cofounder · NSJ Agency",
    "AI Product Builder",
    "Next.js · TypeScript",
    "Postgres · Supabase",
    "OpenAI · Vercel AI SDK",
    "Design led engineering",
  ];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg-elev)]/40">
      <div className="flex w-max animate-ticker">
        {[...items, ...items].map((it, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-6 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]"
          >
            <span className="text-[var(--color-accent)]">◉</span>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10"
    >
      <SectionHead label="01 / Thesis" title="What I sell, really." />
      <div className="mt-12 grid grid-cols-12 gap-6">
        <p className="col-span-12 font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.05] md:col-span-10">
          The reason most digital products feel{" "}
          <span className="italic text-[var(--color-accent)]">forgettable</span>{" "}
          isn&apos;t code quality. It&apos;s that engineering and design were
          done by people who never sat in the same room. NSJ Agency exists to
          collapse that gap. One engineer, one designer, no translation layer.
        </p>
      </div>
    </section>
  );
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 md:flex-row md:items-end md:justify-between">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]">
        {label}
      </div>
      <h2 className="font-display text-3xl italic md:text-4xl">{title}</h2>
    </div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10"
    >
      <SectionHead label="02 / Selected work" title="Live products, real users." />
      <ul className="mt-12 border-y border-[var(--color-line)]">
        {projects.map((p) => (
          <li key={p.name}>
            <ProjectRow project={p} />
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
        ↳ Four solo SaaS, one client feature, two NSJ engagements signed for Q2 2026.
      </p>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const isLink = project.url !== "#";
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isLink ? (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        {children}
      </a>
    ) : (
      <div className="group block">{children}</div>
    );

  return (
    <Wrapper>
      <div className="grid grid-cols-12 items-baseline gap-4 border-t border-[var(--color-line)] py-6 transition-colors hover:bg-[var(--color-bg-elev)]/50 md:gap-6 md:py-8">
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
            {project.year}
          </span>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl italic leading-none md:text-4xl">
              {project.name}
            </span>
            {isLink && (
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)] transition-colors group-hover:text-[var(--color-accent)]">
                ↗
              </span>
            )}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-base text-[var(--color-ink-soft)] md:text-[15px]">
            {project.tagline}
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
            {project.stack}
          </span>
        </div>
        <div className="col-span-6 flex flex-col items-end gap-1 md:col-span-1">
          <Badge variant={project.role === "Under NSJ" ? "accent" : "ink"}>
            {project.role}
          </Badge>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-mute)]">
            {project.status}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

function Badge({
  children,
  variant = "ink",
}: {
  children: React.ReactNode;
  variant?: "ink" | "accent";
}) {
  const cls =
    variant === "accent"
      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
      : "border-[var(--color-line)] text-[var(--color-ink-soft)]";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] ${cls}`}
    >
      {children}
    </span>
  );
}

function Duo() {
  return (
    <section
      id="duo"
      className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10"
    >
      <SectionHead label="03 / The duo" title="Engineer × Designer." />
      <div className="mt-12 grid grid-cols-12 gap-6">
        <PersonCard
          initial="N"
          name="Nathan Serfaty"
          role="Fullstack engineer · Cofounder"
          bio="Ships the product. System architecture, backend, APIs, databases, modern frontend. Four live SaaS solo before NSJ. Knows what shipping actually costs."
          tags={["Next.js", "TypeScript", "Postgres", "AI agents", "Vercel"]}
        />
        <PersonCard
          initial="J"
          name="Jeremy Manset"
          role="Designer · Cofounder"
          bio="Trained at Penninghen, Paris. Brings the visual language that lets us sell premium. Interfaces, identity, motion. Design that gets us in the room with serious clients."
          tags={["Penninghen", "Brand", "UI/UX", "Motion", "Art direction"]}
        />
      </div>
      <p className="mt-10 max-w-2xl font-display text-2xl italic leading-snug text-[var(--color-ink-soft)] md:text-3xl">
        Most agencies stack five people between the brief and the build. We are
        two. Same room. Same taste.{" "}
        <span className="text-[var(--color-accent)]">Same standard.</span>
      </p>
    </section>
  );
}

function PersonCard({
  initial,
  name,
  role,
  bio,
  tags,
}: {
  initial: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
}) {
  return (
    <article className="col-span-12 flex flex-col gap-6 rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg-elev)]/40 p-8 md:col-span-6 md:p-10">
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] font-display text-3xl italic text-[var(--color-bg)]">
          {initial}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
          Paris · 2026
        </span>
      </div>
      <div>
        <div className="font-display text-3xl">{name}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
          {role}
        </div>
      </div>
      <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        {bio}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10"
    >
      <SectionHead label="04 / Services" title="What NSJ sells." />
      <div className="mt-12 grid grid-cols-12 gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)]">
        {services.map((s) => (
          <div
            key={s.n}
            className="col-span-12 flex flex-col gap-4 bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-bg-elev)] md:col-span-6 md:p-10"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]">
                {s.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                ◉ Available
              </span>
            </div>
            <h3 className="font-display text-4xl italic leading-tight">
              {s.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
      <SectionHead label="05 / Operating principles" title="How we actually work." />
      <ol className="mt-12 grid grid-cols-12 gap-6">
        {principles.map((p) => (
          <li
            key={p.k}
            className="col-span-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 md:col-span-4"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]">
              {p.k}
            </span>
            <h4 className="font-display text-2xl italic leading-tight md:text-3xl">
              {p.t}
            </h4>
            <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              {p.d}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10"
    >
      <SectionHead label="06 / Get in touch" title="Have a product to ship?" />
      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <p className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02]">
            Tell me what you&apos;re building.{" "}
            <a
              href="mailto:nathanserfaty20@gmail.com"
              className="italic text-[var(--color-accent)] underline decoration-[var(--color-accent)]/40 decoration-2 underline-offset-[10px] hover:decoration-[var(--color-accent)]"
            >
              nathanserfaty20@gmail.com
            </a>
          </p>
        </div>
        <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
          <ContactRow label="Agency" value="nsjagency.com" href="https://nsjagency.com" />
          <ContactRow
            label="LinkedIn"
            value="Nathan Serfaty"
            href="https://www.linkedin.com/in/nathan-serfaty-11a620292"
          />
          <ContactRow label="Located" value="Paris · Île de France" />
          <ContactRow label="Status" value="One slot open · Q2 2026" accent />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  accent,
}: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className="flex items-baseline justify-between border-t border-[var(--color-line)] py-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)]">
        {label}
      </span>
      <span
        className={`font-display text-xl italic ${
          accent ? "text-[var(--color-accent)]" : ""
        }`}
      >
        {value}
        {href ? " ↗" : ""}
      </span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto mt-10 max-w-[1400px] border-t border-[var(--color-line)] px-6 py-8 sm:px-10">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
          © 2026 Nathan Serfaty · Built for Digital Comms and Personal Branding · Session 4
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
          Engineered in Paris · No template, no AI slop, just code
        </span>
      </div>
    </footer>
  );
}

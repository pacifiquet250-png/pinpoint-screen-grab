import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/programs", label: "Programs" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="AfriYouth Innovation Labs home">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary font-display text-lg font-bold text-secondary-foreground">
        A
      </span>
      <span className="truncate font-display text-lg font-semibold leading-tight">
        AfriYouth <span className="text-secondary">Innovation Labs</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:flex lg:justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <ButtonLink to="/partnerships" className="ml-2">Partner With Us</ButtonLink>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background px-5 pb-5 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              className="block border-b py-3.5 font-medium data-[status=active]:text-secondary"
            >
              {n.label}
            </Link>
          ))}
          <ButtonLink to="/partnerships" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Partner With Us
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">AfriYouth Innovation Labs</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            Empowering African youth through research, policy, human-centered design, innovation,
            entrepreneurship and strategic foresight.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/75 hover:text-primary-foreground">{n.label}</Link></li>
            ))}
            <li><Link to="/partnerships" className="text-primary-foreground/75 hover:text-primary-foreground">Partnerships</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get in touch</p>
          <p className="mt-3 text-sm text-primary-foreground/75">Use our contact form and our team will get back to you.</p>
          <ButtonLink to="/contact" variant="accent" className="mt-4">Contact us</ButtonLink>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} AfriYouth Innovation Labs. All rights reserved.
      </div>
    </footer>
  );
}

type Variant = "primary" | "secondary" | "outline" | "accent" | "ghostLight";
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-primary/20 text-foreground hover:bg-muted",
  ghostLight: "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
};
export const btn = (v: Variant = "primary") =>
  `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 ${variants[v]}`;

export function ButtonLink({
  to, children, variant = "primary", className = "", onClick,
}: { to: (typeof NAV)[number]["to"] | "/partnerships"; children: ReactNode; variant?: Variant; className?: string; onClick?: () => void }) {
  return <Link to={to} onClick={onClick} className={`${btn(variant)} ${className}`}>{children}</Link>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="pattern-dots absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{intro}</p>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-5 py-16 md:py-24 ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function SampleBadge({ label = "Sample content — not yet verified" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
      {label}
    </span>
  );
}

export function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-hero p-8 text-primary-foreground md:p-14">
        <div className="pattern-dots absolute inset-0" aria-hidden />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Let's build Africa's future, together.</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Whether you're a young innovator, researcher, funder or institution — there's a place for you here.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/programs" variant="accent">Explore Our Programs</ButtonLink>
            <ButtonLink to="/partnerships" variant="ghostLight">Partner With Us</ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

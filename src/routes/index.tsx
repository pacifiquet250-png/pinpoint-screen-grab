import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ButtonLink, CTA, Section, SectionTitle } from "@/components/site";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfriYouth Innovation Labs — Empowering Africa's Youth" },
      { name: "description", content: "Empowering Africa's youth through research, policy, human-centered design, innovation and entrepreneurship." },
      { property: "og:title", content: "AfriYouth Innovation Labs" },
      { property: "og:description", content: "Empowering Africa's youth through research, innovation & entrepreneurship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pattern-dots absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <p className="inline-flex rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Youth · Research · Innovation
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Empowering Africa's Youth Through Research, Innovation{" "}
              <span className="text-accent">&amp; Entrepreneurship.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              We work alongside young Africans to generate evidence, shape policy, design solutions
              and build ventures that create a more inclusive, sustainable future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/programs" variant="accent">Explore Our Programs <ArrowRight size={16} /></ButtonLink>
              <ButtonLink to="/partnerships" variant="ghostLight">Partner With Us</ButtonLink>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-3 rounded-[2rem] bg-secondary/40 blur-2xl" aria-hidden />
            <img
              src={hero}
              alt="Young African innovators collaborating around laptops in an innovation lab"
              width={1600}
              height={1104}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            ["Mission", "To equip African youth with the evidence, skills and networks to lead change in their communities."],
            ["Vision", "An Africa where young people are recognised and resourced as drivers of innovation and development."],
            ["Approach", "Youth-centred, evidence-led and collaborative — we co-create with the people we serve."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-secondary pl-5">
              <h2 className="text-2xl font-semibold">{t}</h2>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-muted">
        <Section>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="What we do" title="Seven pillars of youth empowerment" />
            <Link to="/what-we-do" className="inline-flex items-center gap-2 font-semibold text-secondary hover:underline">
              See all areas <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-2xl border bg-card p-6 transition-transform hover:-translate-y-1 hover:shadow-soft">
                <s.icon className="text-secondary" size={26} aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <CTA />
    </>
  );
}

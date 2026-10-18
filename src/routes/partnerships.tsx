import { createFileRoute } from "@tanstack/react-router";
import { Building2, HandCoins, School, Globe2 } from "lucide-react";
import { ButtonLink, PageHeader, Section, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — AfriYouth Innovation Labs" },
      { name: "description", content: "How organizations, funders and institutions can collaborate with AfriYouth Innovation Labs." },
      { property: "og:title", content: "Partner With AfriYouth Innovation Labs" },
      { property: "og:description", content: "Collaborate with us to empower Africa's youth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partnerships,
});

const WAYS = [
  { icon: HandCoins, t: "Funders & foundations", d: "Support programs, fellowships and research that put youth at the centre." },
  { icon: School, t: "Universities & research bodies", d: "Co-design studies, share data and mentor emerging researchers." },
  { icon: Building2, t: "Companies & employers", d: "Offer mentorship, internships and pathways into meaningful work." },
  { icon: Globe2, t: "Governments & NGOs", d: "Collaborate on evidence-based policy and community-led solutions." },
];
const STEPS = ["Reach out through our contact form", "Explore shared goals in a discovery call", "Co-design a partnership plan", "Launch, learn and measure impact together"];

function Partnerships() {
  return (
    <>
      <PageHeader eyebrow="Partnerships" title="Collaborate for greater impact." intro="We work with organizations and institutions who share our commitment to Africa's young people." />
      <Section>
        <SectionTitle eyebrow="Ways to partner" title="Who we work with" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {WAYS.map((w) => (
            <div key={w.t} className="flex gap-4 rounded-2xl border bg-card p-6">
              <w.icon className="shrink-0 text-secondary" size={28} aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">{w.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-muted">
        <Section>
          <SectionTitle eyebrow="How it works" title="From conversation to collaboration" />
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s} className="rounded-2xl bg-card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-primary-foreground">{i + 1}</span>
                <p className="mt-4 font-medium">{s}</p>
              </li>
            ))}
          </ol>
          <ButtonLink to="/contact" variant="primary" className="mt-10">Start a conversation</ButtonLink>
        </Section>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import { CTA, PageHeader, Section, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AfriYouth Innovation Labs" },
      { name: "description", content: "Our mission, vision and approach to youth empowerment and sustainable development in Africa." },
      { property: "og:title", content: "About AfriYouth Innovation Labs" },
      { property: "og:description", content: "Our mission, vision and approach to youth empowerment in Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  ["Youth at the centre", "Young people are partners and leaders, not just beneficiaries."],
  ["Evidence first", "Decisions grounded in research and continuous learning."],
  ["Co-creation", "Solutions designed with communities, tested in context."],
  ["Long-term thinking", "Foresight that prepares youth for the futures ahead."],
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Youth-led change, grounded in evidence." intro="AfriYouth Innovation Labs exists to unlock the potential of Africa's young people as researchers, designers, entrepreneurs and leaders." />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={about} alt="A young African researcher presenting findings to peers" loading="lazy" width={1200} height={1008} className="aspect-[6/5] w-full rounded-3xl object-cover shadow-soft" />
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold">Our mission</h2>
              <p className="mt-3 text-muted-foreground">To equip African youth with the evidence, skills, tools and networks they need to drive innovation and sustainable development in their communities and beyond.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Our vision</h2>
              <p className="mt-3 text-muted-foreground">An Africa where every young person is recognised, resourced and empowered as a driver of inclusive growth and positive change.</p>
            </div>
          </div>
        </div>
      </Section>
      <section className="bg-muted">
        <Section>
          <SectionTitle eyebrow="Our approach" title="How we work" intro="We combine research, design and entrepreneurship to support sustainable development that lasts." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-6">
                <span className="font-display text-3xl text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
      <CTA />
    </>
  );
}

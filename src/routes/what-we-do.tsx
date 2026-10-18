import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHeader, Section } from "@/components/site";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — AfriYouth Innovation Labs" },
      { name: "description", content: "Research, policy, human-centered design, entrepreneurship, professional development, foresight and impact measurement." },
      { property: "og:title", content: "What We Do — AfriYouth Innovation Labs" },
      { property: "og:description", content: "Seven areas of work empowering African youth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <>
      <PageHeader eyebrow="What we do" title="Seven ways we empower young Africans." intro="Our work spans the full journey — from understanding challenges to designing, launching and measuring solutions." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`group rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-soft ${i === 0 ? "lg:col-span-2" : ""}`}>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <s.icon size={24} aria-hidden />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink, CTA, PageHeader, SampleBadge, Section } from "@/components/site";
import { PROGRAMS, type Program } from "@/lib/content";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Opportunities — AfriYouth Innovation Labs" },
      { name: "description", content: "Explore fellowships, accelerators, training and research opportunities for young Africans." },
      { property: "og:title", content: "Programs & Opportunities — AfriYouth Innovation Labs" },
      { property: "og:description", content: "Fellowships, accelerators and training for African youth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programs,
});

const FILTERS = ["All", "Fellowship", "Accelerator", "Training", "Research"] as const;

function Programs() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list: Program[] = filter === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);
  return (
    <>
      <PageHeader eyebrow="Programs & opportunities" title="Find your next opportunity." intro="Explore programs designed to help young people research, design, build and lead." />
      <Section>
        <div role="note" className="rounded-2xl border border-accent bg-accent/10 p-5 text-sm">
          <strong>Please note:</strong> the programs below are sample listings. Names, eligibility,
          dates and formats are placeholders and have not yet been verified. Contact us for confirmed details.
        </div>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter programs">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${filter === f ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border bg-card p-6 transition-shadow hover:shadow-soft">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">{p.category}</span>
                <SampleBadge label="Sample" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider">Eligibility</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {p.eligibility.map((e) => (
                  <li key={e} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden />{e}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">{p.format}</p>
              <ButtonLink to="/contact" variant="outline" className="mt-6 self-start">Express interest</ButtonLink>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

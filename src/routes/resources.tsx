import { createFileRoute } from "@tanstack/react-router";
import { FileText, BookOpen, Lightbulb, Wrench } from "lucide-react";
import { ButtonLink, PageHeader, SampleBadge, Section } from "@/components/site";
import { RESOURCES } from "@/lib/content";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — AfriYouth Innovation Labs" },
      { name: "description", content: "Research publications, reports, insights and learning resources on African youth and innovation." },
      { property: "og:title", content: "Resources — AfriYouth Innovation Labs" },
      { property: "og:description", content: "Publications, reports, insights and toolkits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

const ICONS = { Publication: BookOpen, Report: FileText, Insight: Lightbulb, Toolkit: Wrench };

function Resources() {
  return (
    <>
      <PageHeader eyebrow="Resources" title="Knowledge for youth-led change." intro="Research publications, reports, insights and practical tools from our work across the continent." />
      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <SampleBadge label="Placeholder titles — publications coming soon" />
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => {
            const Icon = ICONS[r.type];
            return (
              <article key={r.title} className="rounded-2xl border bg-card p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <Icon size={18} aria-hidden /> {r.type}
                </div>
                <h2 className="mt-4 text-lg font-semibold">{r.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                <p className="mt-5 text-xs font-medium text-muted-foreground">Coming soon</p>
              </article>
            );
          })}
        </div>
        <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
          <h2 className="text-2xl font-semibold">Want to be notified when we publish?</h2>
          <p className="mt-2 text-muted-foreground">Get in touch and we'll keep you updated.</p>
          <ButtonLink to="/contact" variant="secondary" className="mt-5">Contact us</ButtonLink>
        </div>
      </Section>
    </>
  );
}

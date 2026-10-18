import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { PageHeader, Section, btn } from "@/components/site";
import { validateContact, type ContactErrors } from "@/lib/validate-contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AfriYouth Innovation Labs" },
      { name: "description", content: "Get in touch with AfriYouth Innovation Labs about programs, partnerships or research." },
      { property: "og:title", content: "Contact AfriYouth Innovation Labs" },
      { property: "og:description", content: "Send us a message about programs, partnerships or research." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

function Contact() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs = validateContact(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      (form.querySelector(`[name="${Object.keys(errs)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    form.reset();
  }

  const input = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-base outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk." intro="Questions about programs, partnerships or research? Send us a message." />
      <Section className="max-w-3xl">
        <div aria-live="polite">
          {status === "success" && (
            <div className="mb-6 flex gap-3 rounded-2xl border border-secondary bg-secondary/10 p-4 text-sm">
              <CheckCircle2 className="shrink-0 text-secondary" size={20} aria-hidden />
              <p><strong>Thank you!</strong> Your message has been received. We'll get back to you soon.</p>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 flex gap-3 rounded-2xl border border-destructive bg-destructive/10 p-4 text-sm">
              <AlertCircle className="shrink-0 text-destructive" size={20} aria-hidden />
              <p>Please fix the highlighted fields and try again.</p>
            </div>
          )}
        </div>
        <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-3xl border bg-card p-6 shadow-soft md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name} className={f.name === "subject" ? "md:col-span-2" : ""}>
                <label htmlFor={f.name} className="text-sm font-semibold">{f.label} <span className="text-destructive" aria-hidden>*</span></label>
                <input id={f.name} name={f.name} type={f.type} autoComplete={f.autoComplete} required
                  aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${f.name}-err` : undefined} className={input} />
                {errors[f.name] && <p id={`${f.name}-err`} className="mt-1.5 text-sm text-destructive">{errors[f.name]}</p>}
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">Message <span className="text-destructive" aria-hidden>*</span></label>
            <textarea id="message" name="message" rows={6} required aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined} className={input} />
            {errors.message && <p id="message-err" className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" disabled={status === "sending"} className={`${btn("secondary")} w-full py-3.5 md:w-auto`}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </Section>
    </>
  );
}

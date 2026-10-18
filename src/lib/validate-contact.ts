export type ContactErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function validateContact(d: Record<string, string | undefined>): ContactErrors {
  const e: ContactErrors = {};
  const name = d.name?.trim() ?? "";
  const email = d.email?.trim() ?? "";
  const subject = d.subject?.trim() ?? "";
  const message = d.message?.trim() ?? "";
  if (name.length < 2) e.name = "Please enter your name.";
  else if (name.length > 100) e.name = "Name must be under 100 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
  if (subject.length < 3) e.subject = "Please add a short subject.";
  else if (subject.length > 150) e.subject = "Subject must be under 150 characters.";
  if (message.length < 10) e.message = "Message should be at least 10 characters.";
  else if (message.length > 2000) e.message = "Message must be under 2000 characters.";
  return e;
}

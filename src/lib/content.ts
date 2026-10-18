import {
  Search, Landmark, Users, Rocket, GraduationCap, Telescope, BarChart3,
  type LucideIcon,
} from "lucide-react";

export const SERVICES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Search, title: "Research & Evidence Generation", text: "Rigorous, youth-led research that surfaces the realities, aspirations and needs of young Africans." },
  { icon: Landmark, title: "Policy & Advocacy", text: "Translating evidence into policy recommendations and amplifying youth voices in decision-making." },
  { icon: Users, title: "Human-Centered Design", text: "Co-creating solutions with the communities they serve, grounded in empathy and real-world testing." },
  { icon: Rocket, title: "Innovation & Entrepreneurship", text: "Supporting young founders to turn ideas into viable, scalable ventures with lasting impact." },
  { icon: GraduationCap, title: "Professional Development", text: "Building skills, confidence and networks that help young professionals thrive." },
  { icon: Telescope, title: "Strategic Foresight", text: "Exploring possible futures so youth and institutions can anticipate change and act early." },
  { icon: BarChart3, title: "Impact Measurement", text: "Designing frameworks to track outcomes, learn continuously and demonstrate real change." },
];

export type Program = {
  title: string; category: "Fellowship" | "Accelerator" | "Training" | "Research";
  summary: string; eligibility: string[]; format: string;
};
export const PROGRAMS: Program[] = [
  { title: "Youth Research Fellowship", category: "Fellowship", summary: "A mentored fellowship for emerging researchers studying issues affecting African youth.", eligibility: ["Ages 18–35", "Based in an African country", "Interest in social research"], format: "Hybrid · [Duration TBC]" },
  { title: "Venture Builders Accelerator", category: "Accelerator", summary: "Hands-on support for early-stage, youth-led ventures solving local challenges.", eligibility: ["Founder aged 18–35", "Early-stage idea or prototype", "African-based team"], format: "Cohort-based · [Dates TBC]" },
  { title: "Design for Impact Bootcamp", category: "Training", summary: "An intensive introduction to human-centered design methods and practice.", eligibility: ["Open to students and young professionals", "No prior experience required"], format: "Online · [Duration TBC]" },
  { title: "Futures Lab", category: "Research", summary: "Collaborative strategic foresight workshops exploring Africa's possible futures.", eligibility: ["Youth leaders and practitioners", "Commitment to group sessions"], format: "Workshops · [Schedule TBC]" },
  { title: "Policy Voices Program", category: "Fellowship", summary: "Equipping young people to engage with policy processes and advocate effectively.", eligibility: ["Ages 18–35", "Active in civic or community work"], format: "Hybrid · [Duration TBC]" },
  { title: "Career Readiness Series", category: "Training", summary: "Practical sessions on skills, mentorship and workplace readiness.", eligibility: ["Students and recent graduates"], format: "Online · [Schedule TBC]" },
];

export type Resource = { type: "Publication" | "Report" | "Insight" | "Toolkit"; title: string; text: string };
export const RESOURCES: Resource[] = [
  { type: "Report", title: "[Placeholder] State of Youth Innovation", text: "A future report exploring the youth innovation landscape across the continent." },
  { type: "Publication", title: "[Placeholder] Youth & the Future of Work", text: "A research paper on skills, employment and emerging opportunities." },
  { type: "Insight", title: "[Placeholder] Designing With, Not For", text: "Reflections on applying human-centered design with youth communities." },
  { type: "Toolkit", title: "[Placeholder] Foresight Starter Kit", text: "A practical guide for running futures workshops with young people." },
  { type: "Insight", title: "[Placeholder] Measuring What Matters", text: "Notes on building meaningful impact measurement frameworks." },
  { type: "Report", title: "[Placeholder] Youth Policy Brief", text: "A brief summarising evidence-based recommendations for policymakers." },
];

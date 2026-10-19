/** Reviewed public content derived from Joshua's master CV (August 2026). */
export const profile = {
  name: "Joshua L. Magdadaro",
  role: "Full-Stack TypeScript Developer | Backend, Next.js & AWS",
  location: "Consolacion, Cebu, Philippines",
  email: "joshuamagdada@gmail.com",
  github: "https://github.com/Josh-M2",
  linkedin: "https://www.linkedin.com/in/joshua-magdadaro-904366338/",
  profile:
    "Full-stack TypeScript developer with production experience across fintech, SaaS, and CMS platforms. My work spans Next.js interfaces, Node.js services, secure integrations, and AWS workflows.",
} as const;

export const experience = [
  {
    company: "Uni-Tech Web Development Services",
    title: "Backend Developer (Independent Contractor)",
    period: "Jul 2026 – Present",
    location: "Remote",
    summary:
      "Build TypeScript services for event-driven fintech workflows and secure integrations.",
    highlights: [
      "Develop AWS workflows with Lambda, DynamoDB, Step Functions, and CDK.",
      "Use runtime validation, typed error handling, and automated tests for third-party integrations.",
    ],
  },
  {
    company: "INSPI-RE UG (haftungsbeschränkt)",
    title: "Full-Stack Web Developer",
    period: "Jun 2025 – Apr 2026",
    location: "Remote",
    summary:
      "Built and maintained production CMS websites and a SaaS platform with Next.js and Payload CMS.",
    highlights: [
      "Supported CI/CD and Kubernetes deployments across production and staging environments.",
      "Improved operational reliability through automated backups, memory monitoring, and production troubleshooting.",
    ],
  },
  {
    company: "Gethub",
    title: "Full-Stack Web Developer",
    period: "Jun 2024 – Dec 2024",
    location: "Remote",
    summary:
      "Built responsive web applications with React, Node.js, Express, and REST APIs.",
    highlights: [
      "Translated design files into working interfaces and collaborated with designers and managers.",
      "Integrated LLM capabilities and Stripe payments, and improved page loading through code and image optimization.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Cebu Technological University – Danao Campus",
  period: "2021 – 2025",
} as const;

export const skillGroups = [
  {
    title: "Application development",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Services & data",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "Payload CMS"],
  },
  {
    title: "Cloud & quality",
    items: ["AWS Lambda", "DynamoDB", "Step Functions", "CDK", "GitHub Actions", "Kubernetes", "Vitest", "Playwright"],
  },
] as const;

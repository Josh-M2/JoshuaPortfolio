export type Project = {
  slug: string;
  repo: `Josh-M2/${string}`;
  title: string;
  category: string;
  summary: string;
  role: string;
  context: string;
  contribution: string[];
  stack: string[];
  diagram: [string, string, string];
  diagramCaption: string;
  accent: "teal" | "blue" | "clay" | "violet" | "green";
  preview:
    | { type: "diagram" }
    | { type: "screenshot"; viewport?: "mobile"; layout?: "conversation"; src: `/project-previews/${string}.jpg`; alt: string; caption: string; capturedOn: string; toolbarLabel?: string; toolbarDomain?: string };
  demoUrl?: string;
  demoNote?: string;
};

/** Editorial claims come from the CV and reviewed project sources; GitHub metadata is joined by exact repo. */
export const projects: readonly Project[] = [
  {
    slug: "leadnest-crm",
    repo: "Josh-M2/crm-app",
    title: "LeadNest CRM",
    category: "SaaS / Full stack",
    summary: "A multi-tenant CRM for organization-scoped sales workflows.",
    role: "Architecture, full-stack implementation, and tests",
    context:
      "The application brings leads, deals, users, analytics, and activity history into an organization-scoped CRM.",
    contribution: [
      "Architected the app with Next.js, Prisma, Neon PostgreSQL, and NextAuth.",
      "Built organization-scoped leads, deals, users, analytics dashboards, and activity history.",
      "Added Vitest unit tests and Playwright end-to-end coverage for critical workflows.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest", "Playwright"],
    diagram: ["Organization", "Sales workflows", "Activity history"],
    diagramCaption: "Conceptual map of the CRM's organization-scoped workflow.",
    accent: "teal",
    preview: {
      type: "screenshot",
      src: "/project-previews/leadnest-crm-live-dashboard.jpg",
      alt: "Signed-in LeadNest CRM dashboard for the joshw organization showing sample pipeline metrics and recent activity.",
      caption: "Live dashboard · joshw sample workspace",
      capturedOn: "2026-10-19",
      toolbarLabel: "Signed-in live dashboard",
    },
    demoUrl: "https://crm-app-blush-three.vercel.app/dashboard",
    demoNote: "Preview shows sample data in the joshw organization. The live dashboard requires sign-in.",
  },
  {
    slug: "feel-daily-verse",
    repo: "Josh-M2/feel",
    title: "Feel Daily Verse",
    category: "Mobile / Platform integration",
    summary: "Home-screen verses synchronized across Android and iOS widgets.",
    role: "Native widget integration and state synchronization",
    context:
      "The app's daily verse needs to remain consistent between the app and home-screen widgets.",
    contribution: [
      "Implemented an Android Kotlin widget provider and an iOS Swift/WidgetKit extension.",
      "Synchronized verse payloads, display settings, effective dates, pin requests, and timeline refreshes.",
      "Kept guest and signed-in widget state aligned after bootstrap, session, and preference changes.",
    ],
    stack: ["Kotlin", "Swift", "WidgetKit", "Mobile integrations"],
    diagram: ["Verse state", "Platform bridge", "Home-screen widget"],
    diagramCaption: "Conceptual flow from app verse state to native home-screen widgets.",
    accent: "blue",
    preview: {
      type: "screenshot",
      viewport: "mobile",
      src: "/project-previews/feel-daily-verse.jpg",
      alt: "Feel Daily Verse mobile Today screen showing the daily verse, a reflection card, and bottom navigation.",
      caption: "Public mobile demo · guest view",
      capturedOn: "2026-10-17",
    },
    demoUrl: "https://feelv1.vercel.app/#/tab_today/home",
    demoNote: "First visit opens guest setup before Today.",
  },
  {
    slug: "jugandr",
    repo: "Josh-M2/JuganDR",
    title: "JuganDR",
    category: "Civic services / Realtime",
    summary: "A document request demo with live tracking for residents and a staff review dashboard.",
    role: "Full-stack request, tracking, and staff workflows",
    context:
      "This portfolio demo connects resident document requests to staff review and status updates. Its records are fictional; it is not an official barangay service.",
    contribution: [
      "Built the request form and public tracking flow for seven document types with supporting-file uploads.",
      "Developed the staff dashboard for reviewing requests, changing statuses, exporting CSV data, and preparing unsigned PDF drafts.",
      "Connected Neon PostgreSQL, private Object Storage, and Neon Realtime so the tracker and dashboard receive live status updates.",
    ],
    stack: ["React", "TypeScript", "Express", "Neon PostgreSQL", "Neon Realtime", "Object Storage"],
    diagram: ["Resident request", "Live status", "Staff review"],
    diagramCaption: "Conceptual path from a resident request to live tracking and staff review.",
    accent: "green",
    preview: {
      type: "screenshot",
      src: "/project-previews/jugandr-staff-dashboard.jpg",
      alt: "JuganDR staff dashboard showing twelve fictional document requests, status counts, filters, and a request list.",
      caption: "Staff dashboard · fictional demo requests",
      capturedOn: "2026-10-19",
      toolbarLabel: "Signed-in demo dashboard",
    },
    demoUrl: "https://jugandr-web.vercel.app/admin",
    demoNote: "The staff dashboard requires sign-in. This portfolio demo uses fictional records and is not an official barangay service.",
  },
  {
    slug: "real-time-chat",
    repo: "Josh-M2/chat-app",
    title: "Real-Time Chat",
    category: "Full stack / Realtime",
    summary: "Messaging with presence, unread indicators, and file sharing.",
    role: "Full-stack application development",
    context:
      "A full-stack chat platform combines live conversation, account security, and shared media.",
    contribution: [
      "Built the application with React, Node.js, Express, MongoDB, Socket.IO, and Cloudinary.",
      "Developed real-time messaging with presence, unread indicators, and file sharing.",
      "Implemented token refresh, protected routes, rate limiting, reCAPTCHA, and input sanitization.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    diagram: ["Client", "Realtime service", "Messages & media"],
    diagramCaption: "Conceptual view of the client, realtime service, and stored content.",
    accent: "clay",
    preview: {
      type: "screenshot",
      layout: "conversation",
      src: "/project-previews/real-time-chat-presence.jpg",
      alt: "Real-Time Chat test conversation with a red unread indicator, green online presence indicators, alternating messages, and a composer.",
      caption: "Live conversation · presence and unread state",
      capturedOn: "2026-10-17",
    },
    demoUrl: "https://chat-app-eight-ebon-56.vercel.app/chat",
    demoNote: "The live conversation requires sign-in.",
  },
  {
    slug: "supabase-user-management",
    repo: "Josh-M2/user-management",
    title: "Supabase User Management",
    category: "Auth / Data access",
    summary: "User administration with role-based access and database policies.",
    role: "Frontend and Supabase-native authorization",
    context:
      "The project handles account administration without introducing a custom Node.js backend.",
    contribution: [
      "Created a React and Supabase-native user administration system.",
      "Implemented authentication, role-based access control, and PostgreSQL row-level security.",
      "Used Supabase Edge Functions for privileged server-side operations.",
    ],
    stack: ["React", "Supabase Auth", "PostgreSQL RLS", "Edge Functions"],
    diagram: ["Admin UI", "Auth & roles", "Row-level policies"],
    diagramCaption: "Conceptual path from the admin interface to policy-guarded data.",
    accent: "violet",
    preview: {
      type: "screenshot",
      src: "/project-previews/supabase-user-management.jpg",
      alt: "Supabase User Management admin dashboard showing three team members, including two administrators and one staff member.",
      caption: "Signed-in admin dashboard",
      capturedOn: "2026-10-18",
    },
    demoUrl: "https://user-management-two-wine.vercel.app/admindashboard",
    demoNote: "The admin dashboard requires sign-in.",
  },
  {
    slug: "virtual-services-agency",
    repo: "Josh-M2/Virtual-Services-Agency",
    title: "Virtual Services Agency",
    category: "Frontend / Responsive web",
    summary: "A responsive presentation of virtual services and agency content.",
    role: "User-facing page implementation",
    context:
      "The website presents service content for a virtual services agency.",
    contribution: [
      "Built and styled the user-facing pages.",
      "Focused on a clear, responsive presentation of service content.",
    ],
    stack: ["Frontend development", "Responsive UI"],
    diagram: ["Service content", "Page structure", "Responsive view"],
    diagramCaption: "Conceptual map of the site's service-content presentation.",
    accent: "green",
    preview: {
      type: "screenshot",
      src: "/project-previews/virtual-services-agency.jpg",
      alt: "Virtual Services Agency public homepage with its navigation, large heading, and Build My Team button.",
      caption: "Public demo homepage",
      capturedOn: "2026-10-17",
    },
    demoUrl: "https://virtual-services-agency.vercel.app/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

# Joshua L. Magdadaro — Portfolio

A personal portfolio for Joshua's projects, experience, skills, resume, and contact information. Built with Next.js App Router, React, TypeScript, Tailwind CSS, Inter, and Lucide React.

## Local setup

Use pnpm:

```sh
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

Quality checks:

```sh
pnpm lint
pnpm typecheck
pnpm content:audit
pnpm previews:check
pnpm build
```

## Content and data

- `config/content.ts` is the reviewed public profile, experience, education, and skills source, derived from Joshua's master CV. The on-site resume and generated PDF read these same values.
- `config/projects.ts` is the allowlisted editorial project manifest. Case-study claims come from the CV and reviewed project sources. All six projects use reviewed captures, including the signed-in live LeadNest dashboard, a portrait mobile capture of Feel, and signed-in captures for JuganDR, Chat, and User Management.
- `config/github.ts` requests current public repository descriptions, topics, language, stars, and update dates from GitHub's official REST API. Responses are validated and cached for 3,600 seconds. Missing repositories and API outages receive explicit fallback copy.
- `GITHUB_TOKEN` is optional and server-only. Do not prefix it with `NEXT_PUBLIC_`. Unauthenticated requests are sufficient for a small portfolio in normal conditions.
- `SITE_URL` optionally overrides the canonical origin for metadata, robots, and the sitemap. On Vercel, the site uses `VERCEL_PROJECT_PRODUCTION_URL` automatically (or `VERCEL_URL` when that is unavailable). Local work defaults to `http://localhost:3000`.
- `CHROME_EXECUTABLE_PATH` optionally points the PDF generator to a local Chrome binary. On macOS it uses the standard Google Chrome application path; on Linux deployments it uses bundled Chromium.

Do not commit a `.env` file. Never put the connected Drive CV URL or its phone number into the public site. The downloadable resume is generated from reviewed public content and omits the phone number.

## Preview workflow

Project screenshots are committed as JPEGs under `public/project-previews/` and referenced by stable paths with alt text, source labels, and capture dates in the manifest. The captures show the LeadNest CRM signed-in live dashboard, Feel's guest Today screen at 390 × 844, JuganDR's staff dashboard, a Real-Time Chat conversation between two test accounts, the signed-in User Management admin dashboard, and the Virtual Services Agency homepage. LeadNest's live capture uses the `joshw` organization and shows sample pipeline metrics and activity; its preview label identifies the signed-in source, while the image link goes to `/dashboard` on the public demo. JuganDR's dashboard capture comes from its signed-in live demo; the visible request records match the repository's fictional seed data. The chat sidebar was filtered to the test contact before capture, so the screenshot shows its red unread dot and green presence dots without publishing unrelated users. The User Management capture shows Joshua's account and two demo members. Next.js optimizes the images for each viewport at render time; `pnpm previews:check` verifies that every manifest path exists and that desktop, mobile, and conversation crops stay within size bounds. Each screenshot links to its allowlisted live demo.

To refresh a preview, open only its allowlisted `demoUrl` from `config/projects.ts`, capture the page at a fixed desktop viewport (1280–1440px wide) or 390 × 844 mobile viewport, check that it works and shows no private account data, replace the local JPEG, update `capturedOn`, then run `pnpm previews:check`. For the authenticated chat demo, exchange test messages, filter the sidebar to the test contact, and crop to the app surface so both status indicators remain visible; the live link targets `/chat` and redirects unsigned visitors to sign-in. LeadNest, JuganDR, and User Management previews are captured after signing in to their dashboard routes; unsigned visitors are redirected to sign-in. Select the `joshw` organization for LeadNest and use only JuganDR's fictional seed records in its preview. Feel's exact demo link is `https://feelv1.vercel.app/#/tab_today/home`; new guests are redirected through the app's onboarding before reaching Today. Do not capture a URL supplied by repository content or capture on visitor requests. Projects without a suitable public image retain a labeled conceptual diagram.

## Deployment notes

Vercel detects Next.js and the pnpm lockfile when importing this GitHub repository. With Vercel system environment variables exposed, the site needs no required environment variables for its core pages; import the repository and deploy. `GITHUB_TOKEN` and `SITE_URL` remain optional. After deployment, check the canonical URL, sitemap, and Chromium-backed PDF download on the live host; local builds cannot verify the hosted PDF function. No deployment is performed by this repository setup.

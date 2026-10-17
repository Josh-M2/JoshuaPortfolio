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
- `config/projects.ts` is the allowlisted editorial project manifest. Case-study claims come from the CV. Four projects use local captures of verified public demos, including a portrait mobile capture of Feel; one project uses a labeled conceptual diagram.
- `config/github.ts` requests current public repository descriptions, topics, language, stars, and update dates from GitHub's official REST API. Responses are validated and cached for 3,600 seconds. Missing repositories and API outages receive explicit fallback copy.
- `GITHUB_TOKEN` is optional and server-only. Do not prefix it with `NEXT_PUBLIC_`. Unauthenticated requests are sufficient for a small portfolio in normal conditions.
- `SITE_URL` sets the canonical origin for metadata and the sitemap. It defaults to `http://localhost:3000` during local work; set the final public origin before deployment.
- `CHROME_EXECUTABLE_PATH` optionally points the PDF generator to a local Chrome binary. On macOS it uses the standard Google Chrome application path; on Linux deployments it uses bundled Chromium.

Do not commit a `.env` file. Never put the connected Drive CV URL or its phone number into the public site. The downloadable resume is generated from reviewed public content and omits the phone number.

## Preview workflow

Demo screenshots are committed as JPEGs under `public/project-previews/` and referenced by stable paths with alt text, source labels, and capture dates in the manifest. The captures show the public LeadNest CRM homepage, Feel's guest Today screen at 390 × 844, a Real-Time Chat conversation between two test accounts, and the Virtual Services Agency homepage. The chat sidebar was filtered to the test contact before capture, so the screenshot shows its red unread dot and green presence dots without publishing unrelated users. Next.js optimizes the images for each viewport at render time; `pnpm previews:check` verifies that every manifest path exists and that desktop, mobile, and conversation crops stay within size bounds. Each screenshot links to its allowlisted live demo.

To refresh a preview, open only its allowlisted `demoUrl` from `config/projects.ts`, capture the public page at a fixed 1280px desktop viewport or 390 × 844 mobile viewport, check that it works and shows no private account data, replace the local JPEG, update `capturedOn`, then run `pnpm previews:check`. For the authenticated chat demo, exchange test messages, filter the sidebar to the test contact, and crop to the app surface so both status indicators remain visible; the live link targets `/chat` and redirects unsigned visitors to sign-in. Feel's exact demo link is `https://feelv1.vercel.app/#/tab_today/home`; new guests are redirected through the app's onboarding before reaching Today. Do not capture a URL supplied by repository content or capture on visitor requests. Projects without a suitable public image retain a labeled conceptual diagram.

## Deployment notes

Run the checks above, set `SITE_URL`, and confirm the final domain and portrait choice. The PDF route uses Chromium on demand; verify it on the target host. No deployment is performed by this repository setup.

import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { profile, experience, skillGroups, education } from "@/config/content";
import { projects } from "@/config/projects";

export const maxDuration = 60;

const filename = "Joshua-L-Magdadaro-Resume.pdf";
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);

function resumeHtml() {
  const sections = experience.map((item) => `
    <div class="entry">
      <h3>${escapeHtml(item.title)} · ${escapeHtml(item.company)}</h3>
      <p class="meta">${escapeHtml(item.period)} · ${escapeHtml(item.location)}</p>
      <p>${escapeHtml(item.summary)}</p>
      <ul>${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>
    </div>`).join("");
  const selectedProjects = projects.map((project) => `
    <div class="entry"><h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)} My contribution: ${escapeHtml(project.role)}.</p></div>`).join("");
  const skills = skillGroups.map((group) => `
    <div class="entry"><h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.items.join(", "))}</p></div>`).join("");

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(profile.name)} — Resume</title>
    <style>
      @page { size: A4; margin: 16mm 17mm; }
      * { box-sizing: border-box; }
      body { margin: 0; color: #173b3e; font: 10pt/1.48 Arial, sans-serif; }
      h1 { margin: 0; font-size: 25pt; letter-spacing: -.5pt; }
      .role { margin: 1mm 0 3mm; color: #0b5553; font-weight: 700; }
      .contact { display: flex; flex-wrap: wrap; gap: 1mm 5mm; font-size: 8.5pt; }
      .contact a { color: inherit; }
      section { margin-top: 6mm; padding-top: 2.5mm; border-top: .3pt solid #b9cec7; }
      h2 { margin: 0 0 2.5mm; font-size: 11pt; }
      h3 { margin: 0; font-size: 9.5pt; }
      p { margin: 1mm 0 2mm; }
      .meta { color: #4c6969; font-size: 8.5pt; }
      .entry { break-inside: avoid; margin-bottom: 3.5mm; }
      ul { margin: 1.5mm 0 0; padding-left: 4.5mm; }
      .projects { break-before: page; margin-top: 0; padding-top: 0; border-top: 0; }
      .columns { display: grid; grid-template-columns: 1.15fr .85fr; gap: 7mm; }
    </style></head><body>
    <header><h1>${escapeHtml(profile.name)}</h1><p class="role">${escapeHtml(profile.role)}</p>
    <div class="contact"><span>${escapeHtml(profile.location)}</span><span>${escapeHtml(profile.email)}</span>
    <span>${escapeHtml(profile.github)}</span><span>${escapeHtml(profile.linkedin)}</span></div></header>
    <section><h2>Profile</h2><p>${escapeHtml(profile.profile)}</p></section>
    <section><h2>Experience</h2>${sections}</section>
    <section class="projects"><h2>Selected personal projects</h2>${selectedProjects}</section>
    <div class="columns"><section><h2>Skills</h2>${skills}</section>
    <section><h2>Education</h2><div class="entry"><h3>${escapeHtml(education.degree)}</h3>
    <p>${escapeHtml(education.school)}</p><p>${escapeHtml(education.period)}</p></div></section></div>
    </body></html>`;
}

async function launchBrowser() {
  const localMacChrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const executablePath = process.env.CHROME_EXECUTABLE_PATH
    ?? (process.platform === "darwin" ? localMacChrome : await chromium.executablePath());
  return puppeteer.launch({
    executablePath,
    args: process.platform === "darwin" || process.env.CHROME_EXECUTABLE_PATH ? [] : chromium.args,
    headless: true,
  });
}

export async function GET() {
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    await page.setContent(resumeHtml(), { waitUntil: "load" });
    await page.emulateMediaType("print");
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    return new Response(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  } finally {
    await browser.close();
  }
}

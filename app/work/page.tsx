import type { Metadata } from "next";
import { SiteShell } from "@/components/templates/SiteShell";
import { ProjectRow } from "@/components/molecules/ProjectRow";
import { ContactPanel } from "@/components/organisms/ContactPanel";
import { getRepositories } from "@/config/github";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Joshua L. Magdadaro's full-stack, mobile, and backend projects.",
};

export default async function WorkPage() {
  const repositories = await getRepositories(projects);

  return (
    <SiteShell>
      <div className="container page-intro">
        <h1>Projects, explained.</h1>
        <p>These case studies focus on what I contributed. Reviewed previews include Feel on mobile, LeadNest&apos;s signed-in joshw dashboard, and JuganDR&apos;s staff dashboard with fictional requests. Repository details come from GitHub when available.</p>
      </div>
      <section className="container" aria-label="Selected projects">
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} repository={repositories[index]} headingLevel="h2" />
          ))}
        </div>
      </section>
      <section className="section" id="contact">
        <div className="container"><ContactPanel /></div>
      </section>
    </SiteShell>
  );
}

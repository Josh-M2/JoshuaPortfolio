import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/projects";
import type { RepositoryResult } from "@/config/github";
import { ProjectVisual } from "@/components/atoms/ProjectVisual";

export function ProjectRow({ project, repository, headingLevel = "h3" }: { project: Project; repository: RepositoryResult; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const isMobileDemo = project.preview.type === "screenshot" && project.preview.viewport === "mobile";
  const repoStatus = repository.status === "available"
    ? `GitHub updated ${new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(repository.details.updatedAt))}`
    : repository.status === "missing"
      ? "Source repository currently unavailable"
      : "Live repository details temporarily unavailable";
  return (
    <article className="project-row">
      <div className={`project-row__visual project-row__visual--${project.accent}`}>
        <ProjectVisual project={project} />
      </div>
      <div className="project-row__content">
        <Heading>{project.title}</Heading>
        <span className="project-row__category">{project.category}</span>
        <p className="project-row__summary">{project.summary}</p>
        <p className="project-row__role">My contribution: {project.role}</p>
        <p className="project-row__repo">{repoStatus}</p>
        <div className="project-row__links">
          <Link className="text-link" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
            Read the case study <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          {project.demoUrl && (
            <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${project.title} ${isMobileDemo ? "public mobile app" : "public website"}`}>
              {isMobileDemo ? "Visit live app" : "Visit live site"} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.demoNote && <p className="project-row__demo-note">{project.demoNote}</p>}
      </div>
    </article>
  );
}

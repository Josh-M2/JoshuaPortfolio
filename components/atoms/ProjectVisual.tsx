import type { Project } from "@/config/projects";
import { Smartphone } from "lucide-react";
import { PreviewImage } from "@/components/atoms/PreviewImage";
import { ProjectDiagram } from "@/components/atoms/ProjectDiagram";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.preview.type === "diagram") return <ProjectDiagram project={project} />;

  const preview = project.preview;
  const captured = new Intl.DateTimeFormat("en", {
    month: "short", year: "numeric", timeZone: "UTC",
  }).format(new Date(preview.capturedOn));

  return (
    <figure className={`project-preview project-preview--${project.accent}${preview.viewport === "mobile" ? " project-preview--mobile" : ""}${preview.layout === "conversation" ? " project-preview--conversation" : ""}`}>
      <div className="project-preview__toolbar">
        {preview.viewport === "mobile"
          ? <Smartphone size={16} aria-hidden="true" />
          : <span className="project-preview__dots" aria-hidden="true"><i /><i /><i /></span>}
        <span>{preview.viewport === "mobile" ? "Public mobile app" : "Public website"}</span>
        <span className="project-preview__domain">{project.demoUrl ? new URL(project.demoUrl).hostname : project.title}</span>
      </div>
      {project.demoUrl ? (
        <a className="project-preview__image-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${project.title} live demo`}>
          <div className="project-preview__image">
            <PreviewImage src={preview.src} alt={preview.alt} title={project.title} mobile={preview.viewport === "mobile"} />
          </div>
        </a>
      ) : (
        <div className="project-preview__image">
          <PreviewImage src={preview.src} alt={preview.alt} title={project.title} mobile={preview.viewport === "mobile"} />
        </div>
      )}
      <figcaption><strong>{preview.caption}</strong><span>Captured {captured}</span></figcaption>
    </figure>
  );
}

import type { Project } from "@/config/projects";

export function ProjectDiagram({ project }: { project: Project }) {
  return (
    <figure className={`project-diagram project-diagram--${project.accent}`}>
      <div className="project-diagram__top">
        <span>{project.title}</span>
        <span>Conceptual view</span>
      </div>
      <ProjectFlow project={project} />
      <figcaption>{project.diagramCaption}</figcaption>
    </figure>
  );
}

function ProjectFlow({ project }: { project: Project }) {
  if (project.slug === "leadnest-crm") {
    return (
      <div className="project-diagram__flow project-diagram__flow--scope">
        <div className="project-diagram__scope">
          <span className="project-diagram__scope-label">Organization scope</span>
          <div className="project-diagram__scope-modules">
            <div className="project-diagram__node">Sales workflows</div>
            <div className="project-diagram__node">Activity history</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "feel-daily-verse") {
    return (
      <div className="project-diagram__flow project-diagram__flow--widgets">
        <div className="project-diagram__node">Verse state</div>
        <span className="project-diagram__line" aria-hidden="true" />
        <div className="project-diagram__node project-diagram__node--emphasis">Platform bridge</div>
        <span className="project-diagram__line" aria-hidden="true" />
        <div className="project-diagram__widget-pair">
          <div className="project-diagram__node">Android widget</div>
          <div className="project-diagram__node">iOS widget</div>
        </div>
      </div>
    );
  }

  if (project.slug === "real-time-chat") {
    return (
      <div className="project-diagram__flow project-diagram__flow--realtime">
        <div className="project-diagram__node">Client</div>
        <span className="project-diagram__line project-diagram__line--bidirectional" aria-hidden="true" />
        <div className="project-diagram__realtime-core">
          <div className="project-diagram__node project-diagram__node--emphasis">Realtime service</div>
          <div className="project-diagram__node">Messages &amp; media</div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-diagram__flow">
      {project.diagram.map((node, index) => (
        <FragmentNode key={node} label={node} connector={index < 2} />
      ))}
    </div>
  );
}

function FragmentNode({ label, connector }: { label: string; connector: boolean }) {
  return (
    <>
      <div className="project-diagram__node">{label}</div>
      {connector && <span className="project-diagram__line" aria-hidden="true" />}
    </>
  );
}

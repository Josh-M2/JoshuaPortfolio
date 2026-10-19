import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { SiteShell } from "@/components/templates/SiteShell";
import { ProjectVisual } from "@/components/atoms/ProjectVisual";
import { ContactPanel } from "@/components/organisms/ContactPanel";
import { getRepository } from "@/config/github";
import { getProject, projects } from "@/config/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project unavailable" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const repository = await getRepository(project);
  const related = projects.filter((item) => item.slug !== slug).slice(0, 2);
  const isMobileDemo = project.preview.type === "screenshot" && project.preview.viewport === "mobile";

  return (
    <SiteShell>
      <article className="container project-detail">
        <header className="page-intro project-detail__header">
          <div>
            <Link className="breadcrumb" href="/work"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
          <aside>
            <strong>{project.category}</strong>
            <span>My contribution: {project.role}</span>
            {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{isMobileDemo ? "Visit live app" : "Visit live site"} <ArrowUpRight size={17} aria-hidden="true" /></a>}
            {project.demoNote && <span className="project-detail__demo-note">{project.demoNote}</span>}
          </aside>
        </header>

        <div className="project-detail__visual">
          <ProjectVisual project={project} />
        </div>

        <div className="project-detail__body">
          <div>
            <h2>The context</h2>
            <p>{project.context}</p>
            <div className="project-detail__meta">
              <h3>Technologies in this work</h3>
              <ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div>
            <h2>What I contributed</h2>
            <ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="project-detail__meta">
              <h3>Repository</h3>
              {repository.status === "available" ? (
                <>
                  {repository.details.description && <p>GitHub description: {repository.details.description}</p>}
                  <p>
                    GitHub lists {repository.details.language ?? "no primary language"} as the primary language;
                    last updated {new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(repository.details.updatedAt))}.
                  </p>
                  <a className="text-link" href={repository.details.url} target="_blank" rel="noopener noreferrer">
                    <Github size={17} aria-hidden="true" /> View source on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </>
              ) : repository.status === "missing" ? (
                <p>The source repository is currently unavailable on GitHub. This case study uses the reviewed project content above.</p>
              ) : (
                <>
                  <p>Live GitHub details could not be loaded. This case study uses the reviewed project content above.</p>
                  <a className="text-link" href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer">
                    <Github size={17} aria-hidden="true" /> Try opening the repository <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </article>

      <section className="section section--white" aria-labelledby="more-work-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="more-work-title">Keep exploring.</h2>
            <p>More project stories from a different part of the stack.</p>
          </div>
          <div className="related-work">
            {related.map((item) => (
              <Link href={`/work/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="contact">
        <div className="container"><ContactPanel /></div>
      </section>
    </SiteShell>
  );
}

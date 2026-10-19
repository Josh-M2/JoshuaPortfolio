import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/templates/SiteShell";
import { SystemDiagram } from "@/components/organisms/SystemDiagram";
import { ProjectRow } from "@/components/molecules/ProjectRow";
import { ContactPanel } from "@/components/organisms/ContactPanel";
import { profile, experience, skillGroups, education } from "@/config/content";
import { projects } from "@/config/projects";
import { getRepositories } from "@/config/github";

export default async function HomePage() {
  const selected = projects.slice(0, 3);
  const repositories = await getRepositories(selected);

  return (
    <SiteShell>
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero__intro">
          <h1 id="hero-title">I build the systems behind <span>useful software.</span></h1>
          <div className="hero__side">
            <p className="hero__role">{profile.role}</p>
            <div className="hero__actions">
              <Link className="button" href="/work">Explore projects <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="text-link" href="/#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
            <p className="hero__location">{profile.location}</p>
          </div>
        </div>
        <SystemDiagram />
      </section>

      <section className="section section--white" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="work-title">Featured projects.</h2>
            <p>Selected personal work. Open a case study to see the decisions behind each build.</p>
          </div>
          <div className="project-list">
            {selected.map((project, index) => (
              <ProjectRow key={project.slug} project={project} repository={repositories[index]} />
            ))}
          </div>
          <div className="section-end-link">
            <Link className="text-link" href="/work">View all {projects.length} projects <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="experience-title">Experience across the stack.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-item__period">{item.period}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="experience-item__company">{item.company} · {item.location}</p>
                  <p className="experience-item__summary">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="education-note">
            <strong>{education.degree}</strong>
            <span>{education.school} · {education.period}</span>
          </div>
          <div className="section-end-link">
            <Link className="text-link" href="/resume">View full resume <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section section--white" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="skills-title">Tools in context.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="container"><ContactPanel /></div>
      </section>
    </SiteShell>
  );
}

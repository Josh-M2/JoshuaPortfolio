import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { SiteShell } from "@/components/templates/SiteShell";
import { profile, experience, skillGroups, education } from "@/config/content";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: "The public resume of Joshua L. Magdadaro, drawn from reviewed CV and project content.",
};

export default function ResumePage() {
  return (
    <SiteShell>
      <div className="container resume-wrap">
        <div className="resume-actions">
          <Link className="breadcrumb" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</Link>
          <a className="button" href="/resume/pdf"><Download size={17} aria-hidden="true" /> Download PDF</a>
        </div>
        <article className="resume-sheet" aria-label="Joshua L. Magdadaro public resume">
          <header>
            <h1>{profile.name}</h1>
            <p className="resume-sheet__role">{profile.role}</p>
            <div className="resume-sheet__contact">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </header>

          <section>
            <h2>Profile</h2>
            <p>{profile.profile}</p>
          </section>

          <section>
            <h2>Experience</h2>
            {experience.map((item) => (
              <div className="resume-sheet__entry" key={item.company}>
                <h3>{item.title} · {item.company}</h3>
                <p>{item.period} · {item.location}</p>
                <p>{item.summary}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            ))}
          </section>

          <section>
            <h2>Selected personal projects</h2>
            {projects.map((project) => (
              <div className="resume-sheet__entry" key={project.slug}>
                <h3>{project.title}</h3>
                <p>{project.summary} My contribution: {project.role}.</p>
              </div>
            ))}
          </section>

          <div className="resume-sheet__two">
            <section>
              <h2>Skills</h2>
              {skillGroups.map((group) => (
                <div className="resume-sheet__entry" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(", ")}</p>
                </div>
              ))}
            </section>
            <section>
              <h2>Education</h2>
              <div className="resume-sheet__entry">
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
                <p>{education.period}</p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </SiteShell>
  );
}

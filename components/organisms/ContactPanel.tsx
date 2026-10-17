import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/config/content";

export function ContactPanel() {
  return (
    <div className="contact-panel">
      <div>
        <h2 id="contact-title">Let’s talk about what you’re building.</h2>
        <p>For full-stack, backend, or infrastructure work, email is the most direct way to reach me.</p>
      </div>
      <div className="contact-panel__links">
        <a href={`mailto:${profile.email}`}>
          <span><Mail size={17} aria-hidden="true" /> Email Joshua</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <span><Github size={17} aria-hidden="true" /> GitHub profile</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span><Linkedin size={17} aria-hidden="true" /> LinkedIn profile</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

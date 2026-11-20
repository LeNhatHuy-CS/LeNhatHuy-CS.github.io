import { profile } from '../data.js';

export default function Footer() {
  const { links, emails } = profile;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="footer-links">
          <a href={`mailto:${emails[0]}`}>Email</a>
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {links.orcid && (
            <a href={links.orcid} target="_blank" rel="noopener noreferrer">
              ORCID
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}

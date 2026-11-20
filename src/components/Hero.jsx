import { profile } from '../data.js';

function ExternalLink({ href, children }) {
  return (
    <a className="hero-contact-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Hero() {
  const { links, emails } = profile;

  return (
    <section id="about" className="hero">
      <div className="hero-inner container">
        <div className="hero-content">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>

          <div className="hero-bio-paragraphs">
            {profile.bio.map((text) => (
              <p key={text} className="body-text hero-bio-paragraph">
                {text}
              </p>
            ))}
          </div>

          <div className="hero-contact-info">
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Email:</strong>{' '}
              {emails.map((email, i) => (
                <span key={email}>
                  {i > 0 && ' / '}
                  <a className="hero-contact-link" href={`mailto:${email}`}>
                    {email}
                  </a>
                </span>
              ))}
            </p>
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Profiles:</strong>{' '}
              {links.orcid && <ExternalLink href={links.orcid}>ORCID</ExternalLink>}
              {links.linkedin && (
                <>
                  {' · '}
                  <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
                </>
              )}
              {links.github && (
                <>
                  {' · '}
                  <ExternalLink href={links.github}>GitHub</ExternalLink>
                </>
              )}
            </p>
          </div>
        </div>

        <figure className="hero-photo">
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width="640"
            height="800"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}

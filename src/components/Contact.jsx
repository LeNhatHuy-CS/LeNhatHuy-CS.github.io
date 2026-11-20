import { profile } from '../data.js';

export default function Contact() {
  const { emails, links } = profile;

  const rows = [
    {
      label: 'Email',
      values: emails.map((e) => ({ text: e, href: `mailto:${e}` })),
    },
    links.github && {
      label: 'GitHub',
      values: [{ text: links.github.replace('https://', ''), href: links.github, external: true }],
    },
    links.orcid && {
      label: 'ORCID',
      values: [{ text: links.orcid.replace('https://', ''), href: links.orcid, external: true }],
    },
    links.linkedin && {
      label: 'LinkedIn',
      values: [
        { text: links.linkedin.replace('https://', ''), href: links.linkedin, external: true },
      ],
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="body-text contact-text">
          Feel free to reach out if you want to talk about machine learning, NLP, computer vision,
          data analysis, or a possible collaboration.
        </p>

        <dl className="contact-list">
          {rows.map((row) => (
            <div key={row.label} className="contact-row">
              <dt className="contact-label">{row.label}</dt>
              <dd className="contact-values">
                {row.values.map((v) => (
                  <a
                    key={v.href}
                    href={v.href}
                    {...(v.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {v.text}
                  </a>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

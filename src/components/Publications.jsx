import { publications } from '../data.js';

function Authors({ authors, me }) {
  return authors.map((author, i) => {
    const isLast = i === authors.length - 1;
    let separator = ', ';
    if (isLast) separator = '';
    else if (i === authors.length - 2) separator = authors.length === 2 ? ' & ' : ', & ';
    return (
      <span key={author}>
        {author === me ? <strong className="author-me">{author}</strong> : author}
        {separator}
      </span>
    );
  });
}

export default function Publications() {
  if (!publications.length) return null;

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="project-list">
          {publications.map((pub) => (
            <article key={pub.title} className="project-card">
              <header className="project-head">
                <h3 className="project-title">
                  {pub.title}
                  {pub.status && <span className="badge">{pub.status}</span>}
                </h3>
                {pub.links && pub.links.length > 0 && (
                  <div className="project-links">
                    {pub.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </header>

              {pub.venue && <p className="project-context">{pub.venue}</p>}
              {pub.summary && <p className="body-text project-summary">{pub.summary}</p>}
              <p className="pub-authors">
                <Authors authors={pub.authors} me={pub.me} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

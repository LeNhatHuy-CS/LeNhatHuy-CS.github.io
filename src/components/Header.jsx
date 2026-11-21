import { useEffect, useState } from 'react';
import { profile } from '../data.js';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const IDS = NAV.map((n) => n.id);

export default function Header() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header" id="site-header">
      <nav className="nav-inner container" aria-label="Main">
        <a className="brand" href="#about" onClick={close}>
          {profile.brand}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <ul id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
          {profile.cvUrl && (
            <li>
              <a className="nav-cv" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

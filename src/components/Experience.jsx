import { experience } from '../data.js';

export default function Experience() {
  if (!experience.length) return null;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience &amp; Education</h2>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.period}-${item.role}`} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-body">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                {item.points.length > 0 && (
                  <ul className="bullet-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

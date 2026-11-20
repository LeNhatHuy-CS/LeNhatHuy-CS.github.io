import { skills } from '../data.js';

export default function Skills() {
  if (!skills.length) return null;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <dl className="skill-grid">
          {skills.map((group) => (
            <div key={group.group} className="skill-group">
              <dt className="skill-group-title">{group.group}</dt>
              <dd className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

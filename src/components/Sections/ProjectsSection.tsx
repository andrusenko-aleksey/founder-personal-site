import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

export default function ProjectsSection() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <section id="projects" className="onepage-section">
      <div className="projects-page">
        <header className="projects-header">
          <h2 className="page-title">Projects</h2>
          <p className="page-subtitle">GrowPad, research and milestones</p>
        </header>

        {featuredProjects.length > 0 && (
          <div className="projects-featured">
            <h3 className="projects-section-title">Featured</h3>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="projects-other">
            <h3 className="projects-section-title">More</h3>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

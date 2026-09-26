import AboutContent from '@/components/About/Sections';
import { aboutMarkdown } from '@/data/about';

export default function AboutSection() {
  return (
    <section id="about" className="onepage-section">
      <div className="about-page">
        <header className="about-header">
          <h2 className="page-title">About</h2>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </div>
    </section>
  );
}

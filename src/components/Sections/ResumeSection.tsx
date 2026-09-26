import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import Skills from '@/components/Resume/Skills';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

export default function ResumeSection() {
  return (
    <section id="resume" className="onepage-section">
      <div className="resume-page">
        <header className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <p className="resume-summary">
            Founder &amp; CEO with 16+ years in SEO and growth marketing. I run
            GrowPad, an inbound growth agency that helps SaaS and B2B tech
            companies win visibility across Google and AI search. Before that I
            spent more than seven years at Livepage, first as Head of SEO and
            then as CEO. I&apos;ve led two marketing agencies and helped 50+
            tech and SaaS teams grow through organic search.
          </p>
        </header>

        <div className="resume-content">
          <div className="resume-section">
            <Experience data={work} />
          </div>
          <div className="resume-section">
            <Education data={degrees} />
          </div>
          <div className="resume-section">
            <Skills skills={skills} categories={categories} />
          </div>
          <div className="resume-section">
            <References />
          </div>
        </div>
      </div>
    </section>
  );
}

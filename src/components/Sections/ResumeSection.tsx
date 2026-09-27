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
            16+ years in SEO and inbound marketing, from my first SEO job in
            2010 to founding GrowPad in 2020. Along the way I spent more than
            seven years at Livepage, rising from SEO specialist to Head of SEO,
            Head of Marketing and Acting CEO. Today I manage a team of 10 that
            helps SaaS and B2B tech companies turn Google and AI search into
            qualified pipeline.
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

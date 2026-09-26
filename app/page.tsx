import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import AboutSection from '@/components/Sections/AboutSection';
import ContactSection from '@/components/Sections/ContactSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ResumeSection from '@/components/Sections/ResumeSection';
import WritingSection from '@/components/Sections/WritingSection';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Founder & CEO of GrowPad, an SEO and AI-visibility agency for SaaS and B2B tech. 16+ years in SEO, content and LLMO, helping 50+ tech teams grow organic pipeline.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function HomePage() {
  return (
    <PageWrapper mainClassName="page-main--onepage">
      <PersonSchema />
      <Hero />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />
    </PageWrapper>
  );
}

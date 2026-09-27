import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import AboutSection from '@/components/Sections/AboutSection';
import BookSection from '@/components/Sections/BookSection';
import ContactSection from '@/components/Sections/ContactSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ResumeSection from '@/components/Sections/ResumeSection';
import WritingSection from '@/components/Sections/WritingSection';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Founder & CEO of GrowPad. 16+ years in SEO and inbound marketing, helping 50+ SaaS and tech companies win the first click on Google and in ChatGPT.',
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
      <BookSection />
      <ResumeSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />
    </PageWrapper>
  );
}

import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Founder & CEO of GrowPad, an SEO and AI-visibility agency for SaaS and B2B tech. 16+ years in SEO, content and LLMO, helping 50+ tech teams grow organic pipeline.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}

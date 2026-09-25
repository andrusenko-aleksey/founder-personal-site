import type { Metadata } from 'next';

import Personal from '@/components/Stats/Personal';
import Site from '@/components/Stats/Site';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Stats',
  description:
    'Numbers behind Oleksii Andrusenko and GrowPad: years in SEO, companies helped and Clutch reviews.',
  path: '/stats/',
});

export default function StatsPage() {
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">Stats</h1>
          <p className="stats-subtitle">The numbers behind the work</p>
        </header>
        <div className="stats-content">
          <section>
            <h2 className="stats-section-title">About me</h2>
            <Personal />
          </section>
          <section>
            <h2 className="stats-section-title">This site</h2>
            <Site />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'GrowPad',
    subtitle: 'SEO & AI-visibility agency for SaaS and B2B tech',
    link: 'https://growpad.pro',
    image: '/images/projects/growpad.png',
    date: '2020-09-01',
    desc: 'The agency I founded in 2020. We help 20+ active SaaS and tech clients turn organic search and AI answers into qualified pipeline, backed by 37+ five-star Clutch reviews.',
    tech: ['SaaS SEO', 'LLMO', 'GEO / AEO', 'Content', 'Link Building'],
    featured: true,
  },
  {
    title: 'Global LLMO & Inbound Marketing Research 2026',
    subtitle: 'Survey of 110 IT and SaaS companies',
    link: 'https://growpad.pro/inbound-marketing-report-2026/',
    image: '/images/projects/research-2026.png',
    date: '2026-04-03',
    desc: 'Original research into how IT and SaaS companies invest in inbound marketing and visibility in LLMs, based on a survey run in November and December 2025.',
    tech: ['Research', 'LLMO', 'Inbound Marketing'],
    featured: true,
  },
  {
    title: 'GrowPad European HQ',
    subtitle: 'Alicante, Spain',
    link: 'https://natlawreview.com/press-releases/growpad-opens-european-headquarters-alicante-spain',
    image: '/images/projects/eu-hq.png',
    date: '2026-04-01',
    desc: 'Opened GrowPad’s European headquarters in Alicante to serve B2B tech companies across Europe.',
    tech: ['Expansion', 'EU Market'],
  },
  {
    title: 'GrowPad Agency Rankings 2026',
    subtitle: 'SEO, GEO and LLMO agency research series',
    link: 'https://growpad.pro/best-saas-seo-agencies-in-the-us/',
    image: '/images/projects/rankings-2026.png',
    date: '2026-08-16',
    desc: 'A research series comparing SEO, GEO and LLMO agencies for SaaS and tech companies across the US and Europe.',
    tech: ['Research', 'SEO', 'GEO'],
  },
];

export default data;

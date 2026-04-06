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
    title: 'Growpad.pro',
    subtitle: 'B2B SaaS for outreach automation',
    link: 'https://growpad.pro',
    image: '/images/projects/growpad.jpg',
    date: '2022-01-01',
    desc: 'A complete outreach automation platform for sales and growth teams. Automate email sequences, manage your pipeline, and close deals faster with AI-powered personalization.',
    tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'OpenAI API'],
    featured: true,
  },
  {
    title: 'Growpad Chrome Extension',
    subtitle: 'LinkedIn prospecting at scale',
    link: 'https://growpad.pro/extension',
    image: '/images/projects/growpad-ext.jpg',
    date: '2023-06-01',
    desc: 'A Chrome extension that lets sales teams build prospect lists from LinkedIn, enrich contact data, and push leads directly into Growpad sequences with one click.',
    tech: ['Chrome Extensions', 'TypeScript', 'React', 'REST APIs'],
    featured: true,
  },
  {
    title: 'Cold Email Analyzer',
    subtitle: 'Open-source deliverability tool',
    link: 'https://github.com/andrusenko-aleksey/cold-email-analyzer',
    image: '/images/projects/email-analyzer.jpg',
    date: '2023-02-01',
    desc: 'An open-source tool that scores cold emails on spam likelihood, deliverability, and response rate potential using NLP. Used by 500+ teams.',
    tech: ['Python', 'NLP', 'FastAPI', 'Docker'],
  },
  {
    title: 'Ukrainian Startup Map',
    subtitle: 'Community project',
    link: 'https://github.com/andrusenko-aleksey/ua-startup-map',
    image: '/images/projects/ua-map.jpg',
    date: '2022-05-01',
    desc: 'A crowdsourced interactive map of Ukrainian startups, founders, and investors. Built during the early days of the war to support the tech community.',
    tech: ['Next.js', 'Mapbox', 'Airtable', 'Vercel'],
  },
];

export default data;

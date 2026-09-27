import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import { AUTHOR_NAME, SITE_URL, TWITTER_HANDLE } from '@/lib/utils';
import './tailwind.css';

// Self-hosted (Fontsource, OFL) so builds never depend on fetching Google Fonts.
const sourceSans = localFont({
  src: [
    { path: './fonts/source-sans-3-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/source-sans-3-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const raleway = localFont({
  src: [
    { path: './fonts/raleway-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/raleway-latin-800-normal.woff2', weight: '800' },
  ],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const siteDescription =
  'Founder & CEO of GrowPad. 16+ years in SEO and inbound marketing, helping 50+ SaaS and tech companies win the first click on Google and in ChatGPT.';

export const metadata: Metadata = {
  title: {
    default: AUTHOR_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: siteDescription,
  keywords: [
    AUTHOR_NAME,
    'GrowPad',
    'SaaS SEO',
    'B2B tech SEO',
    'LLMO',
    'GEO',
    'AEO',
    'AI search optimization',
    'inbound marketing',
    'content marketing',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: AUTHOR_NAME,
    title: AUTHOR_NAME,
    description: siteDescription,
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: AUTHOR_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: AUTHOR_NAME,
    description: siteDescription,
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSP-safe theme initialization - prevents flash on load */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`}
        </Script>
      </head>
      <body>
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

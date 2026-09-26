'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sectionRoutes } from '@/data/routes';
import { useActiveSection } from '@/hooks/useActiveSection';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

const sectionIds = sectionRoutes.map((r) => r.sectionId as string);

export default function Navigation() {
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);
  const onHome = pathname === '/';

  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        <span className="logo-text">OA</span>
      </Link>

      <nav className="nav-links">
        {sectionRoutes.map((l) => {
          const active = onHome && activeSection === l.sectionId;
          return (
            <Link
              key={l.label}
              href={l.path}
              className={`nav-link ${active ? 'active' : ''}`}
              aria-current={active ? 'location' : undefined}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}

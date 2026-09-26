'use client';

import { useEffect, useState } from 'react';

// A section counts as current once its top passes this share of the viewport.
const ACTIVATION_LINE = 0.35;

function findActive(ids: string[]): string | null {
  const line = window.innerHeight * ACTIVATION_LINE;
  let current: string | null = null;
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) current = id;
  }
  return current;
}

export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(',');

  useEffect(() => {
    const list = key.split(',');
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(findActive(list)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [key]);

  return active;
}

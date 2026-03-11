'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function IdentityStrip() {
  const pathname = usePathname();

  return (
    // Mobile: fixed topbar with controlled height; Desktop: fixed full-height sidebar
    <aside className="fixed top-0 left-0 w-full h-[72px] md:w-64 md:h-screen bg-bg-elevated border-b md:border-b-0 md:border-r border-white/5 z-40 flex flex-row md:flex-col justify-between md:justify-between items-center md:items-start px-4 md:px-6 py-0 md:py-8">
      <Link href="/" className="block group flex-shrink-0">
        <h1 className="text-base md:text-lg font-medium tracking-tight text-text-primary group-hover:text-accent-primary transition-colors duration-180 leading-tight">
          Jean-Pierre Brill
        </h1>
        <p className="text-xs md:text-sm text-text-secondary mt-0.5 md:mt-1">
          AI Developer & Engineer
        </p>
        <p className="hidden md:block text-xs text-text-secondary/70 mt-1 font-mono">
          Margate, RSA
        </p>
      </Link>

      <nav className="flex flex-row md:flex-col gap-5 md:gap-2 md:mt-8">
        <NavLink href="/" active={pathname === '/'}>Work</NavLink>
        <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
        <NavLink href="/writing" active={pathname === '/writing'}>Writing</NavLink>
      </nav>

      <div className="hidden md:block md:mt-auto">
        <div className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest mb-2">
          Now
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          Building AI-native applications with Perplexity, AI Studio, and exploring UX patterns.
        </p>
      </div>
    </aside>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-180 ${
        active ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
      }`}
    >
      {children}
    </Link>
  );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function IdentityStrip() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-full md:w-64 md:h-screen bg-bg-elevated border-b md:border-b-0 md:border-r border-white/5 z-40 flex flex-col justify-between p-6">
      <div>
        <Link href="/" className="block mb-8 group">
          <h1 className="text-lg font-medium tracking-tight text-text-primary group-hover:text-accent-primary transition-colors duration-180">
            Jean-Pierre Brill
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            AI Developer & Engineer
          </p>
          <p className="text-xs text-text-secondary/70 mt-1 font-mono">
            Margate, RSA
          </p>
        </Link>

        <nav className="flex flex-wrap md:flex-col gap-4 md:gap-2 pb-2 md:pb-0">
          <NavLink href="/" active={pathname === '/'}>Work</NavLink>
          <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
          <NavLink href="/writing" active={pathname === '/writing'}>Writing</NavLink>
        </nav>
      </div>

      <div className="hidden md:block">
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

'use client';

import { ReactNode } from 'react';
import { IdentityStrip } from './IdentityStrip';
import { ProjectTheme } from '@/lib/types';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

interface AppShellProps {
  children: ReactNode;
  theme?: ProjectTheme;
}

export function AppShell({ children, theme }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <IdentityStrip />
      
      <main className="md:ml-64 pt-48 md:pt-0 min-h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

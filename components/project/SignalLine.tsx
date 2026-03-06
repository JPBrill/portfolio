'use client';

import { motion } from 'motion/react';
import { ProjectTheme } from '@/lib/types';

interface SignalLineProps {
  theme: ProjectTheme;
}

export function SignalLine({ theme }: SignalLineProps) {
  return (
    <div className="absolute left-0 md:-left-8 top-0 bottom-0 w-px bg-white/5 z-0 hidden md:block overflow-hidden">
      <div className="sticky top-0 h-screen">
        <motion.div
          className="w-full h-32"
          style={{
            background: `linear-gradient(to bottom, transparent, ${theme.accent}, transparent)`,
          }}
          animate={{
            y: ['-100%', '100vh'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}

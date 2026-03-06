'use client';

import { motion } from 'motion/react';

export function NowStrip() {
  const items = [
    "Learning: WebGL & Shaders",
    "Building: Agentic Workflows",
    "Reading: The Design of Everyday Things"
  ];

  return (
    <section className="py-8 border-y border-white/5 mb-24 overflow-x-auto">
      <div className="flex items-center gap-6 min-w-max">
        <div className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
          Right Now
        </div>
        
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
            className="text-sm text-text-secondary bg-white/5 px-4 py-1.5 rounded-full border border-white/5"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

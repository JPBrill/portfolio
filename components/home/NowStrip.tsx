'use client';

import { motion } from 'motion/react';

export function NowStrip() {
  const lastUpdated = "March 2026";
  
  const items = [
    { label: "Learning", value: "Three.js particle systems & GPU compute" },
    { label: "Building", value: "Multi-agent task delegation prototype" },
    { label: "Exploring", value: "How color psychology shapes AI interface trust" }
  ];

  return (
    <section className="py-8 border-y border-white/5 mb-24">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        {/* Label */}
        <div className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest flex items-center gap-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
          Right Now
        </div>
        
        {/* Last updated */}
        <div className="text-xs font-mono text-text-tertiary hidden sm:block">
          Updated {lastUpdated}
        </div>
      </div>
      
      {/* Items */}
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
            className="group text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 hover:bg-white/8 transition-all duration-200 cursor-default"
          >
            <span className="text-text-tertiary font-mono text-xs mr-1.5">
              {item.label}:
            </span>
            <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-200">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

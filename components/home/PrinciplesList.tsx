'use client';

import { SurfaceCard } from '../ui/SurfaceCard';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'motion/react';

const principles = [
  {
    title: "AI as instrument, not spectacle",
    description: "Technology should fade into the background. The focus must remain on the user's intent and the task at hand."
  },
  {
    title: "Opinionated defaults, reversible decisions",
    description: "Provide strong defaults to reduce cognitive load, but allow users to easily undo or override when needed."
  },
  {
    title: "Fast to ship, calm to use",
    description: "Iterate quickly to find product-market fit, but ensure the final experience feels polished, stable, and serene."
  }
];

export function PrinciplesList() {
  return (
    <section className="mb-32">
      <SectionHeader 
        title="Core Principles" 
        subtitle="The foundational beliefs that guide my design and engineering process." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <SurfaceCard className="h-full flex flex-col justify-between">
              <h3 className="text-lg font-medium text-text-primary mb-4 leading-snug">
                {principle.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </SurfaceCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

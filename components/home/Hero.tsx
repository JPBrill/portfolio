'use client';

import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1] max-w-2xl mb-6">
          I design AI-native experiences that feel <span className="text-accent-primary italic font-serif">inevitable</span>, not artificial.
        </h1>
        
        <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
          Bridging the gap between complex machine learning models and intuitive human interfaces. Currently exploring agentic workflows and generative UI.
        </p>
      </motion.div>
    </section>
  );
}

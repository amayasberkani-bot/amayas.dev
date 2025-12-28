import React from 'react';
import { motion } from 'framer-motion';

/**
 * About/Positioning section describes what makes Mayas different and provides
 * a few quick stats to build credibility. Each element is animated when
 * scrolled into view using Framer Motion’s `whileInView` prop.
 */
export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-4"
      >
        Building products people love to use
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-gray-600 dark:text-gray-300 mx-auto max-w-3xl"
      >
        I specialise in crafting high‑performance digital experiences — from marketing websites
        to complex web applications. With a focus on clean design, robust
        architecture and accessible interfaces, I help businesses and creators
        ship ideas that delight their users.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-blue-600">5+</span>
          <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Years shipping</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-blue-600">20+</span>
          <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Projects delivered</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-blue-600">24h</span>
          <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Response time</span>
        </div>
      </motion.div>
    </section>
  );
}
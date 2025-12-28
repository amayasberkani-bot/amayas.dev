import React from 'react';
import { motion } from 'framer-motion';

/**
 * Portfolio section holds past work. For now it displays an empty state
 * inviting visitors to return once projects have been added. The layout
 * matches the surrounding sections so the portfolio can be populated
 * without altering other code.
 */
export default function Portfolio() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
      >
        Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-8"
      >
        I’m currently curating my portfolio. Check back soon to see some of the projects I’ve built.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500"
          >
            Coming soon
          </div>
        ))}
      </div>
    </section>
  );
}
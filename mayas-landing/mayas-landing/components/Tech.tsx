import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
];

/**
 * Technologies section lists some of the frameworks and libraries Mayas uses.
 * It’s presented as a responsive grid of pills. Each pill animates into
 * view as the user scrolls.
 */
export default function Tech() {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
      >
        Tech
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-gray-700 transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
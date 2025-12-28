import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

/**
 * The hero section introduces the site and sets the overall tone. It
 * features a bold headline, a short introduction, and primary/secondary
 * calls to action that smoothly scroll the visitor to the relevant
 * sections. The arrow indicator below invites users to continue
 * scrolling.
 */
export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center min-h-[80vh] pt-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl px-4"
      >
        Web &amp; App Development That Ships
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="mt-6 text-lg sm:text-xl max-w-2xl px-4 text-gray-600 dark:text-gray-300"
      >
        I’m <span className="font-semibold">Mayas</span> — a developer building fast,
        beautiful websites and web apps that convert.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => scrollToId('contact')}
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors"
        >
          Request a Quote
        </button>
        <button
          onClick={() => scrollToId('services')}
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
        >
          Explore Services
        </button>
      </motion.div>
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
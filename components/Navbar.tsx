import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useActiveSection from './useActiveSection';

interface NavItem {
  label: string;
  target: string;
  isCTA?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Services', target: 'services' },
  { label: 'Work', target: 'work' },
  { label: 'Tech', target: 'tech' },
  { label: 'Contact', target: 'contact' },
];

/**
 * The navigation bar sits below the marquee banner and remains sticky as
 * visitors scroll the page. It highlights the section currently visible
 * using a simple scrollspy mechanism. On small screens, a hamburger menu
 * toggles a full-screen overlay containing the same links.
 */
export default function Navbar() {
  const activeSection = useActiveSection(['services', 'work', 'tech', 'contact']);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="font-bold text-xl lg:text-2xl">
          <a href="#" onClick={() => handleLinkClick('hero')}>
            Mayas
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, target }) => (
            <button
              key={target}
              onClick={() => handleLinkClick(target)}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                activeSection === target ? 'text-blue-600 underline' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 md:hidden">
            {navItems.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => handleLinkClick(target)}
                className={`text-xl font-medium ${
                  activeSection === target ? 'text-blue-600 underline' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="mt-4 px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
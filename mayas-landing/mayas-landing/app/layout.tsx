import './globals.css';
import type { ReactNode } from 'react';

/**
 * RootLayout wraps the entire application. It sets up the global HTML structure,
 * imports the global Tailwind CSS, and defines metadata for SEO. The
 * `scroll-smooth` class on the body enables smooth scrolling for anchor links.
 */
export const metadata = {
  title: 'Mayas | Web & App Developer',
  description: 'Personal portfolio and services website of Mayas, a web and app developer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
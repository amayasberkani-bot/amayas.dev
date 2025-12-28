import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description: 'High‑performance marketing sites and landing pages.',
  },
  {
    title: 'Web Applications',
    description: 'Dashboards, portals and SaaS MVPs with clean architecture.',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross‑platform apps with smooth UX and reliable releases.',
  },
  {
    title: 'SEO & Performance',
    description: 'Technical SEO, Core Web Vitals and on‑page optimization.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Security, updates and long‑term care for your products.',
  },
];

/**
 * Services section lists the core offerings in a responsive grid. Each card
 * staggers into view as the user scrolls down the page. The section is
 * anchored with the `id="services"` attribute so that navigation links
 * can scroll to it.
 */
export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
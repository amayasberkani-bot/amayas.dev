import React from 'react';

/**
 * A looping marquee banner displayed at the very top of the page. It
 * continuously scrolls a promotional message from right to left. The
 * repetition of the message ensures there is no empty gap as the text
 * scrolls. Animation timing is configured via Tailwind’s custom
 * `animate-marquee` class defined in tailwind.config.js.
 */
export default function MarqueeBanner() {
  const message = 'Get a free consultation when you request a quote today — ';
  return (
    <div className="bg-gray-900 text-gray-100 py-2 overflow-hidden">
      <div className="marquee-inner animate-marquee">
        {/* Repeat the message several times to ensure seamless scrolling */}
        <span className="mr-8" aria-hidden="true">{message}</span>
        <span className="mr-8" aria-hidden="true">{message}</span>
        <span className="mr-8" aria-hidden="true">{message}</span>
      </div>
    </div>
  );
}
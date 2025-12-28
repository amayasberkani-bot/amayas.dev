import React from 'react';

/**
 * A simple downward arrow used in the hero section to encourage scrolling.
 * It uses a slow bounce animation defined in tailwind.config.js. The arrow
 * is purely decorative and does not capture pointer events.
 */
export default function ScrollIndicator() {
  return (
    <div className="flex justify-center mt-8 pointer-events-none" aria-hidden="true">
      <svg
        className="w-6 h-6 text-blue-600 animate-bounceSlow"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
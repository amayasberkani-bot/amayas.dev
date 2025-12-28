import { useEffect, useState } from 'react';

/**
 * Tracks which section of the page is currently visible in the viewport and
 * returns the identifier for that section. An IntersectionObserver is
 * configured with generous root margins so that the active section updates
 * slightly before and after the exact midpoint of the viewport. Consumers
 * should pass an array of section IDs (corresponding to the `id`
 * attributes on their section containers).
 */
export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      // When the section enters the middle of the viewport, consider it active.
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1,
    });

    // Observe each requested section element
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
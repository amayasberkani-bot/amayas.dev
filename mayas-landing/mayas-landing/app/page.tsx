import MarqueeBanner from '../components/MarqueeBanner';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Tech from '../components/Tech';
import Contact from '../components/Contact';

/**
 * This is the main landing page. It composes the various sections of the
 * site into a single scrolling experience. Each section sets its own
 * identifier so that the anchored navigation in Navbar can smoothly scroll
 * to it. The top-level structure includes a marquee banner and sticky
 * navigation bar.
 */
export default function HomePage() {
  return (
    <>
      <MarqueeBanner />
      <Navbar />
      <main className="space-y-24 lg:space-y-32 pt-8 lg:pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Tech />
        <Contact />
      </main>
    </>
  );
}
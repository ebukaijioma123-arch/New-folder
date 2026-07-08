import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS, PERSONAL_INFO } from '../constants/data';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  // Tracks whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Tracks whether the user has scrolled down — controls the
  // navbar's background (transparent at top, solid once scrolled)
  const [scrolled, setScrolled] = useState(false);

  // useEffect with an empty dependency array [] runs ONCE when
  // the component first mounts — perfect for setting up event listeners.
  useEffect(() => {
    const handleScroll = () => {
      // If the page has scrolled more than 20px, mark as "scrolled"
      setScrolled(window.scrollY > 20);
    };

    // Attach the listener to the browser window
    window.addEventListener('scroll', handleScroll);

    // CLEANUP FUNCTION: React calls this when the component unmounts.
    // Without this, the listener would stay attached even after the
    // Navbar is gone, causing memory leaks. Always clean up listeners.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array = run once on mount, clean up on unmount

  return (
    // motion.nav animates in from above on first page load
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      // 'fixed' keeps the navbar pinned to the top of the viewport
      // at all times, even while scrolling. z-50 keeps it above other content.
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">

        {/* LOGO — scrolls back to the hero section when clicked */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer font-display font-bold text-xl
                     text-gray-900 dark:text-white"
        >
          <span className="text-primary-500">{PERSONAL_INFO.initials}</span>
          <span className="hidden sm:inline">.dev</span>
        </ScrollLink>

        {/* DESKTOP NAV LINKS — hidden on mobile, shown from md breakpoint up */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80} // Compensates for navbar height so sections
                           // don't get hidden behind the fixed navbar
              // 'spy' + activeClass work together: react-scroll watches
              // scroll position and applies activeClass to whichever
              // link matches the section currently in view
              spy={true}
              activeClass="text-primary-500"
              className="cursor-pointer text-sm font-medium text-gray-600
                         dark:text-gray-300 hover:text-primary-500
                         dark:hover:text-primary-400 transition-colors duration-200"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        {/* RIGHT SIDE: theme toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Hamburger button — only visible below md breakpoint */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL
          AnimatePresence is required to animate a component OUT
          (on unmount). Without it, Framer Motion can only animate
          things IN — the exit animation would just snap away instantly. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-900 overflow-hidden
                       border-t border-gray-100 dark:border-dark-700"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  // Close the mobile menu automatically once a link is clicked
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer py-3 px-2 text-gray-600 dark:text-gray-300
                             hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-800
                             rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
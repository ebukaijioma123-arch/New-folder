import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

// A small, focused component — its ONLY job is the dark mode button.
// Pulling this out of Navbar keeps Navbar.jsx readable.
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // aria-label is critical for accessibility — screen readers
      // announce this button's purpose since there's no visible text label
      aria-label="Toggle dark mode"
      className="relative w-10 h-10 rounded-full flex items-center justify-center
                 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700
                 transition-colors duration-300"
    >
      {/* motion.div with a 'key' prop lets Framer Motion detect when
          the icon switches (sun <-> moon) and animate the transition */}
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiMoon className="text-primary-400 text-lg" />
        ) : (
          <FiSun className="text-primary-500 text-lg" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
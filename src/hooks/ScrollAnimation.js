// This hook gives us a standard "fade up on scroll into view" animation
// that we'll reuse across About, Skills, Services, Projects, etc.
// Defining it once here means every section animates consistently.

// Framer Motion's "variants" pattern: define named animation states,
// then reference them by name in JSX instead of repeating inline objects.
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// A parent container variant — when applied to a wrapping element,
// staggerChildren delays each child's animation slightly after the last,
// creating that "choreographed" cascading effect.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // each child waits 0.15s after the previous
    },
  },
};
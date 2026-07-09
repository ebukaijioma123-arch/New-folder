import { motion } from 'framer-motion';
import { ABOUT_STATS, ABOUT_PARAGRAPHS, PERSONAL_INFO } from '../constants/data';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import Myself from '../assets/Myself.jpeg';

function About() {
  return (
    <div className="section">
      {/* SECTION HEADER — eyebrow + title, consistent pattern
          we'll reuse for every section from here on */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }} means this animation plays ONCE,
        // the first time it scrolls into view — it won't replay if
        // the user scrolls up and back down again. Feels more natural.
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Get to know me</h2>
        <p className="section-subtitle mx-auto">
          A quick look at who I am, what drives me, and how I approach my work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT — Image
            whileInView triggers when this specific element enters
            the viewport, independent of the section header above */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto aspect-square">
            {/* Decorative offset border — a common portfolio design trick:
                a colored rectangle peeking out from behind the photo.
                Sits on the exact same aspect-square footprint as the image
                below, so it can never be larger or smaller than the photo. */}
        
            <img
                src={Osas}
                alt={`${PERSONAL_INFO.name} working`}
                className="absolute inset-0 w-full h-full rounded-2xl shadow-xl
                        object-cover object-top"
            />
          </div>
        </motion.div>

        {/* RIGHT — Story + Stats
            staggerContainer makes paragraphs and stats cascade in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* .map() renders one <p> per paragraph in our data array —
              avoids hardcoding 3 separate near-identical JSX blocks */}
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* STATS GRID */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t
                       border-gray-200 dark:border-dark-700"
          >
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary-500">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
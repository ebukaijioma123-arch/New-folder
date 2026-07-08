import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants/data';

function Experience() {
  return (
    <div className="section">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="section-eyebrow">My Journey</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mx-auto">
          A timeline of where I've worked and what I've learned along the way.
        </p>
      </motion.div>

      {/* TIMELINE CONTAINER — max-w-2xl keeps the line/text from
          stretching too wide on large screens, which would make it
          hard to visually follow the vertical line down the page */}
      <div className="max-w-2xl mx-auto relative">
        {EXPERIENCE.map((item, index) => {
          // Determine if this is the LAST item in the array — if so,
          // we don't want to draw the connecting line below it,
          // since there's no next item to connect to.
          const isLast = index === EXPERIENCE.length - 1;

          return (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // Each item delays slightly more than the last, based on
              // its index — creates a top-to-bottom cascading reveal
              // WITHOUT needing a parent staggerContainer wrapper.
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              {/* VERTICAL LINE — only rendered if this ISN'T the last item.
                  Positioned absolutely, runs from this dot down to the next. */}
              {!isLast && (
                <div className="absolute left-[7px] top-5 w-0.5 h-full
                                 bg-gray-200 dark:bg-dark-700" />
              )}

              {/* TIMELINE DOT */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full
                               bg-primary-500 ring-4 ring-primary-500/20" />

              {/* CONTENT CARD */}
              <div className="card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  {/* Period badge */}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full
                                   bg-primary-500/10 text-primary-600 dark:text-primary-400
                                   whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-primary-500 font-medium text-sm mb-3">
                  {item.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
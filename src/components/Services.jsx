import { motion } from 'framer-motion';
import { SERVICES } from '../constants/data';
import { ICON_MAP } from '../constants/icons';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

function Services() {
  return (
    <div className="section bg-gray-50 dark:bg-dark-800/30 rounded-3xl">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="section-eyebrow">What I Offer</p>
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle mx-auto">
          From building interfaces to building communities — here's how I can help.
        </p>
      </motion.div>

      {/* SERVICES GRID
          staggerContainer on the parent + fadeUp on each card
          gives the same cascading entrance we used in Skills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service) => {
          const IconComponent = ICON_MAP[service.icon];

          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              // whileHover applies styles ONLY while the mouse is over
              // the element — Framer Motion handles the smooth transition
              // back to normal automatically when the mouse leaves.
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card group cursor-default"
            >
              {/* Icon circle — 'group-hover' lets a CHILD element react
                  to hovering the PARENT card, without needing separate
                  hover state logic in React */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl
                               bg-primary-500/10 text-primary-500 text-2xl mb-5
                               group-hover:bg-primary-500 group-hover:text-white
                               transition-colors duration-300">
                <IconComponent />
              </div>

              <h3 className="font-display text-lg font-bold text-gray-900
                             dark:text-white mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Services;
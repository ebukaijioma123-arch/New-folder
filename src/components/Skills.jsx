import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';
import { ICON_MAP } from '../constants/icons';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

function Skills() {
  // Tracks which category tab is currently selected.
  // Starts on 'technical' since that's likely the more scannable
  // first impression for a dev-focused audience, but easy to flip.
  const [activeCategory, setActiveCategory] = useState('technical');

  // .filter() returns only the skills whose 'category' field matches
  // the currently active tab — this is what makes the grid update
  // when you click between Technical / Creative.
  const filteredSkills = SKILLS.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <div className="section">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="section-eyebrow">My Skills</p>
        <h2 className="section-title">What I bring to the table</h2>
        <p className="section-subtitle mx-auto">
          A blend of technical development skills and creative content expertise.
        </p>
      </motion.div>

      {/* CATEGORY TABS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center gap-3 mb-12"
      >
        <button
          onClick={() => setActiveCategory('technical')}
          // Conditional className: active tab gets solid indigo bg,
          // inactive tab gets a subtle outlined look
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            activeCategory === 'technical'
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveCategory('creative')}
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            activeCategory === 'creative'
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
          }`}
        >
          Creative Skills
        </button>
      </motion.div>

      {/* SKILLS GRID
          'key={activeCategory}' on the motion.div forces Framer Motion
          to treat this as a NEW element whenever the tab changes,
          which re-triggers the stagger animation each time you switch tabs */}
      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        {filteredSkills.map((skill) => {
          // Look up the actual icon component using the skill's
          // 'icon' string as the key into our ICON_MAP lookup table
          const IconComponent = ICON_MAP[skill.icon];

          return (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              className="card"
            >
              <div className="flex items-center gap-4 mb-3">
                {/* Icon circle */}
                <div className="w-12 h-12 flex items-center justify-center
                                 rounded-xl bg-primary-500/10 text-primary-500 text-xl">
                  {/* IconComponent is a variable holding a component reference —
                      rendering it as <IconComponent /> displays the actual icon */}
                  <IconComponent />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* PROGRESS BAR TRACK */}
              <div className="w-full h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                {/* PROGRESS BAR FILL — animates its width from 0 to
                    the skill's actual level percentage when scrolled into view */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../constants/data';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

function Projects() {
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
        <p className="section-eyebrow">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle mx-auto">
          A selection of projects that showcase my development and creative skills.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`group card overflow-hidden p-0 ${
              project.featured ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            {/* VISUAL PLACEHOLDER — gradient block with the project's
                first letter. Swap this <div> for a real <img> once you
                have project screenshots — same container, same sizing. */}
            <div
              className={`relative h-48 bg-gradient-to-br ${project.color}
                         flex items-center justify-center overflow-hidden`}
            >
              {/* Large faded letter as a decorative background element */}
              <span className="font-display text-8xl font-extrabold text-white/20">
                {project.title.charAt(0)}
              </span>

              {/* HOVER OVERLAY — link icons fade in over the image on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0
                               group-hover:opacity-100 transition-opacity duration-300
                               flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-white text-gray-900 hover:bg-primary-500 hover:text-white
                             transition-colors duration-200"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-white text-gray-900 hover:bg-primary-500 hover:text-white
                             transition-colors duration-200"
                >
                  <FiExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* CARD CONTENT */}
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-gray-900
                             dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TAG PILLS — nested .map() inside the outer .map() */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full
                               bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
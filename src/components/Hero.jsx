import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/data';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import Myself from '../assets/Myself.jpeg'; // Ensure this path points to your actual image file

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

      {/* AMBIENT BACKGROUND GLOW — two soft blurred circles that
          give the hero depth without being a literal image. Purely CSS. */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20
                       rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10
                       rounded-full blur-3xl animate-pulse-slow -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN — Text content
              staggerContainer on the parent makes each motion child
              below animate in sequence rather than all at once */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Small eyebrow tag above the headline */}
            <motion.p
              variants={fadeUp}
              className="text-primary-500 font-semibold text-sm uppercase
                         tracking-widest mb-4"
            >
              Hi, I'm {PERSONAL_INFO.shortName} 👋
            </motion.p>

            {/* Main headline — your name, the centerpiece of the hero */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold
                         text-gray-900 dark:text-white leading-tight mb-4"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Title/role */}
            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold text-primary-500 mb-6"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Tagline / short pitch */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <button className="btn-primary cursor-pointer">View My Work</button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                <button className="btn-secondary cursor-pointer">Contact Me</button>
              </ScrollLink>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300
                           hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <FiGithub />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300
                           hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <FiLinkedin />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300
                           hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <FiTwitter />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Image with floating animation
              'order-first md:order-last' puts image ABOVE text on mobile
              (visual first), but to the RIGHT of text on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-first md:order-last flex justify-center"
          >
            {/* animate-float is the custom keyframe we defined in index.css —
                makes the image gently bob up and down forever */}
            <div className="relative animate-float">
              {/* Gradient ring behind the image for visual interest */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500
                               to-primary-400 rounded-full blur-2xl opacity-20 scale-110" />
              <img
                src={Myself}
                alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                           object-cover rounded-full border-4 border-white
                           dark:border-dark-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR — hints there's more content below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex justify-center mt-16"
        >
          <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
            <motion.div
              animate={{ y: [0, 8, 0] }} // bobs down and back up forever
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer text-gray-400 dark:text-gray-500
                         hover:text-primary-500 transition-colors"
            >
              <FiArrowDown size={20} />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
import { Link as ScrollLink } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from '../constants/data';

function Footer() {
  // new Date().getFullYear() reads the CURRENT year from the user's
  // browser clock — this means your copyright year auto-updates every
  // January 1st without you ever touching this file again.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 border-t border-gray-800 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LOGO + TAGLINE */}
          <div className="text-center md:text-left">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer font-display font-bold text-xl text-white"
            >
              <span className="text-primary-400">{PERSONAL_INFO.initials}</span>.dev
            </ScrollLink>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* NAV LINKS — repeated from Navbar for footer-level navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-sm text-gray-400 hover:text-primary-400
                           transition-colors duration-200"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* SOCIAL LINKS + BACK TO TOP */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-gray-800 text-gray-400 hover:bg-primary-500
                         hover:text-white transition-all duration-300"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-gray-800 text-gray-400 hover:bg-primary-500
                         hover:text-white transition-all duration-300"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-gray-800 text-gray-400 hover:bg-primary-500
                         hover:text-white transition-all duration-300"
            >
              <FiTwitter size={16} />
            </a>

            {/* Back to top — visually separated with a left margin */}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              aria-label="Back to top"
              className="cursor-pointer w-9 h-9 flex items-center justify-center
                         rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500
                         hover:text-white transition-all duration-300 ml-2"
            >
              <FiArrowUp size={16} />
            </ScrollLink>
          </div>
        </div>

        {/* COPYRIGHT BAR */}                     
        <div className="border-t border-gray-800 dark:border-dark-800 mt-8 pt-6
                         text-center text-gray-500 text-xs">
          © {2026} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
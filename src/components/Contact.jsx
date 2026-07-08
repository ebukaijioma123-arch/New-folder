import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/data';
import { fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      // ============================================================
      // OPTION A: Formspree (recommended) — uncomment this block and
      // replace YOUR_FORM_ID with your real Formspree endpoint.
      // Sign up free at https://formspree.io, create a form, and it
      // gives you a unique URL like https://formspree.io/f/abc123
      // ============================================================
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      // ============================================================
      // OPTION B: Temporary simulation (remove once you wire up
      // Formspree above) — just waits 1.5s to mimic a network request
      // ============================================================
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

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
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto"
      >
        {/* LEFT — Contact Info (2 of 5 columns) */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
            I'm currently open to freelance opportunities and full-time roles.
            Feel free to reach out through the form or directly via email.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300
                         hover:text-primary-500 transition-colors duration-200"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-xl
                               bg-primary-500/10 text-primary-500">
                <FiMail />
              </span>
              <span className="text-sm">{PERSONAL_INFO.email}</span>
            </a>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl
                               bg-primary-500/10 text-primary-500">
                <FiMapPin />
              </span>
              <span className="text-sm">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social links — reused pattern from Hero */}
          <div className="flex items-center gap-3">
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
          </div>
        </motion.div>

        {/* RIGHT — Form (3 of 5 columns) */}
        <motion.div variants={fadeUp} className="md:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* NAME FIELD */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium
                                                 text-gray-700 dark:text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-800
                           text-gray-900 dark:text-white placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary-500/50
                           transition-colors duration-200 ${
                  errors.name
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-dark-700'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* EMAIL FIELD */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium
                                                  text-gray-700 dark:text-gray-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-800
                           text-gray-900 dark:text-white placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary-500/50
                           transition-colors duration-200 ${
                  errors.email
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-dark-700'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE FIELD */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium
                                                    text-gray-700 dark:text-gray-300 mb-1.5">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-800
                           text-gray-900 dark:text-white placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary-500/50
                           transition-colors duration-200 resize-none ${
                  errors.message
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-dark-700'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            {/* SUBMIT BUTTON — text and disabled state change based on status */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full flex items-center justify-center gap-2
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <FiSend size={16} />
                </>
              )}
            </button>

            {/* STATUS MESSAGES — only one renders at a time, based on status */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 text-sm text-center"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm text-center"
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
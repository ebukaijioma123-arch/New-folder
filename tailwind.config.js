/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // we toggle dark mode manually via a CSS class, not OS preference
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0B0D12',   // dark mode background
        paper: '#F2F1EC',  // light mode background
        ink: '#14161C',    // dark text
        signal: '#FF5B39', // primary accent (coral)
        pulse: '#3DD9C4',  // secondary accent (teal)
        mist: '#8A8F98',   // muted gray
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
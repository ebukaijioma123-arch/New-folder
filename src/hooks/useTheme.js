import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook — components call useTheme() instead of
// useContext(ThemeContext) directly. Cleaner, and throws a helpful
// error if someone forgets to wrap their app in <ThemeProvider>.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return context;
}
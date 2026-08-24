import { useEffect } from 'react';

function getPreferredDark() {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) return saved === 'true';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Init-only: applies the saved theme class to <html> once on mount.
 * Holds NO React state — theme switches are pure CSS class flips on
 * documentElement, so toggling never triggers a component re-render
 * and already-rendered sections/animations stay exactly as they are.
 */
export default function useDarkMode() {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', getPreferredDark());
  }, []);
}

/**
 * Imperative toggle used by the header button.
 * Flips the .dark class directly + persists — no React involvement.
 */
export function toggleDarkMode() {
  const root = document.documentElement;
  const next = !root.classList.contains('dark');
  root.classList.toggle('dark', next);
  localStorage.setItem('darkMode', String(next));
}

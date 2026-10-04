/**
 * Sivanantham's Personal Site & Digital Garden Scripts
 * Handles theme persistence (dark/light), mobile navigation, and interactive helpers.
 */

(function () {
  'use strict';

  // 1. Theme Management
  const STORAGE_KEY = 'sivanantham_site_theme';
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark theme or match user system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Initialize theme immediately
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Bind click handlers to theme toggle buttons
  themeToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  // Listen to system preference changes if user hasn't explicitly set one
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('show');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileMenuBtn.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('show');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Dynamic Current Year in Footer
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = currentYear;
  });
})();

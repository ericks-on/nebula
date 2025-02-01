import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDark(initialTheme);

    // Apply theme on initial load
    document.documentElement.classList.toggle('dark', initialTheme);
  }, []);

  useEffect(() => {
    // Update DOM whenever `isDark` changes
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update DOM and localStorage
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-100 shadow-lg hover:shadow-xl 
                 transition-all duration-300 ease-in-out
                 hover:bg-gray-200 dark:hover:bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 group z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:rotate-180" />
      ) : (
        <Moon className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:rotate-180" />
      )}
      
      {/* Tooltip */}
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2
                       bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
                       text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100
                       pointer-events-none transition-opacity duration-200
                       whitespace-nowrap">
        Switch to {isDark ? 'light' : 'dark'} mode
      </span>
    </button>
  );
};

export default ThemeSwitcher;
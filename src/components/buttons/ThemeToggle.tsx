'use client'

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            ) : (
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );
}

export default ThemeToggle;
import { createContext, useEffect, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return savedTheme ?? (prefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save the theme preference to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme) => setTheme(newTheme),
        toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
}

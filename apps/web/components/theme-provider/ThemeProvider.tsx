import React, { createContext, useContext, useState,useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = theme;

const ThemeContext = createContext({
  isDarkMode: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = (checked = true) => {  
    const newTheme = checked ? 'dark' : 'light';
    setIsDarkMode(newTheme);
    localStorage.setItem('theme',newTheme);
  };

  return (
    <body style={{backgroundColor: isDarkMode === 'dark' ? '#021526' : '#F1F1F1' } }>
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode === 'dark' ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
    </body>
  );
};

export const useTheme = () => useContext(ThemeContext);

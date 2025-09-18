// مدیریت تم (روشن/تیره) سایت با استفاده از Context
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// تعریف Context برای تم
export const ThemeContext = createContext();

// پرووایدر تم برای مدیریت حالت روشن و تیره
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // تابع تغییر تم و ذخیره در localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // اعمال تم به سند هنگام تغییر
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// تعریف PropTypes برای اعتبارسنجی پراپ‌ها
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
import React from 'react';
import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


export default function DarkmodeLitemode(){
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
	return(
    <button
      className="bg-transparent border-none cursor-pointer p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 relative max-md:w-auto max-md:ml-[20px] max-md:absolute max-md:right-4 max-md:top-4"
      onClick={toggleTheme}
      aria-label="تغییر تم"
    >
      {theme === 'dark' ? (
        <BsSun className="stroke-[#ffcc00] text-[28px]" />
      ) : (
        <BsMoon className="stroke-[#ddd] text-[28px]" />
      )}
    </button>
	)
}
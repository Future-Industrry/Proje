import { useRoutes ,Link} from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { IsLoginProvider } from "./context/IsLoginContext";
import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import Home from './pages/Home';
import Signup from './pages/Signup';
import FileUploader from './pages/FileUploader';


function App() {
  let routers = useRoutes(routes);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
      <>
        <nav id="nav1">
          <div className="nav-right">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="تغییر تم">
              {theme === 'dark' ? <BsSun className="icon sun" /> : <BsMoon className="icon moon" />}
            </button>
          </div>
          
          <div className="nav-left">
            <Link to="/signup" id="sign-btn">ثبت نام</Link>
          </div>
        </nav>

        <IsLoginProvider>{routers}</IsLoginProvider>
      </>
    );
}

export default App;

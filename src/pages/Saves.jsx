import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


export default function Saves() {
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles(uploaded);
  };

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);


  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px] min-h-[70vh] text-center p-[40px_20px]">
      {files.length === 0 ? (
        <div className="flex flex-col items-center gap-[20px]"> 
          {/*برای لینک کردن کافیه این خط کد رو تو تگ FiPlus اضافه کنی  onClick={() => navigate("/projects")}*/}
          <FiPlus className="mb-13 text-[80px] text-[#bfbfbf] transition duration-300 ease-in-out" />
          <p>شما هنوز هیچ مجموعه‌ای ذخیره نکرده‌اید !</p>
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleUpload}
            className="file-input"
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <div>
          <h2>تعداد فایل‌ها: {files.length}</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}
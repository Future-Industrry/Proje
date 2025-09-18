// کامپوننت هدر برای نمایش لوگو، منوها، سبد خرید، علاقه‌مندی‌ها و تغییر تم
import { useState, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { IoCart, IoHeart } from 'react-icons/io5';
import { GrUndo } from "react-icons/gr";
import { HiMenuAlt3 } from 'react-icons/hi';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { openCart, setActiveTab } from '../../redux/slice/cartSlice';
import { menulists, menuMobileLists } from '../../assets/data/data.js';
import { Badges } from './CustomComponents.jsx';

// بخش اصلی هدر
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart?.itemList || []);
  const favouriteItems = useSelector((state) => state.favorites?.favoritesItemList || []);
  const dispatch = useDispatch();

  // مدیریت باز و بسته شدن منوی موبایل
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // بستن منو با کلیک خارج از آن
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // مدیریت افکت اسکرول برای تغییر استایل هدر
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  // باز کردن سبد خرید
  const handleOpenCart = () => {
    dispatch(openCart());
    dispatch(setActiveTab('cart'));
  };

  // باز کردن علاقه‌مندی‌ها
  const handleOpenFavorites = () => {
    dispatch(openCart());
    dispatch(setActiveTab('favorites'));
  };

  // افزودن Event Listener برای کلیک و اسکرول
  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* هدر نسخه دسکتاپ */}
      <header className={`header hidden lg:flex flex-row-reverse items-center justify-between ${isScrolled ? 'scrolled' : ''} shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]`}>
        <div className="header__actions flex flex-row-reverse items-center">
          <button
            className="header__theme-switch cursor-pointer"
            onClick={toggleTheme}
            title={theme === 'light' ? 'حالت تیره' : 'حالت روشن'}
            aria-label={theme === 'light' ? 'تغییر به حالت تیره' : 'تغییر به حالت روشن'}
          />
          <div
            className="header__icon relative cursor-pointer"
            onClick={handleOpenCart}
            role="button"
            aria-label="باز کردن سبد خرید"
          >
            <IoCart size={24} />
            {cartItems.length > 0 && (
              <Badges color="bg-red-500">{cartItems.length}</Badges>
            )}
          </div>
          <div
            className="header__icon relative cursor-pointer"
            onClick={handleOpenFavorites}
            role="button"
            aria-label="نمایش علاقه‌مندی‌ها"
          >
            <IoHeart size={24} />
            {favouriteItems.length > 0 && (
              <Badges color="bg-red-500">{favouriteItems.length}</Badges>
            )}
          </div>
          <button
            className="header__signup cursor-pointer"
            aria-label="عضویت"
          >
            <BiUser className="w-6 h-6" />
            عضویت
          </button>
        </div>
        <nav className="header__nav flex flex-row items-center">
          {menulists.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `header__nav-item cursor-pointer ${isActive ? 'text-[var(--primary-green)]' : 'text-[var(--text-color)]'}`
              }
            >
              {item.link}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/" className="header__logo cursor-pointer" />
      </header>

      {/* هدر نسخه موبایل */}
      <header className="header-mobile top-0 lg:hidden flex flex-row-reverse items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
        <div className="header-mobile__actions flex flex-row-reverse items-center">
          <button
            className="header-mobile__menu-icon cursor-pointer"
            onClick={toggleMenu}
            aria-label="باز کردن منو"
          >
            <HiMenuAlt3 size={24} />
          </button>
          <div
            className="header__icon relative cursor-pointer"
            onClick={handleOpenCart}
            role="button"
            aria-label="باز کردن سبد خرید"
          >
            <IoCart size={20} />
            {cartItems.length > 0 && (
              <Badges color="bg-red-500">{cartItems.length}</Badges>
            )}
          </div>
          <div
            className="header__icon relative cursor-pointer"
            onClick={handleOpenFavorites}
            role="button"
            aria-label="نمایش علاقه‌مندی‌ها"
          >
            <IoHeart size={20} />
            {favouriteItems.length > 0 && (
              <Badges color="bg-red-500">{favouriteItems.length}</Badges>
            )}
          </div>
          <button
            className="header__signup cursor-pointer"
            aria-label="عضویت"
          >
            <BiUser className="w-4 h-4" />
            عضویت
          </button>
        </div>
        <NavLink to="/" className="header-mobile__logo cursor-pointer" />
      </header>

      {/* منوی موبایل */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <button
          className="mobile-menu__undo-arrow cursor-pointer"
          onClick={toggleMenu}
          aria-label="بستن منو"
        >
          <GrUndo size={32} />
        </button>
        <div className="mobile-menu__content flex flex-row-reverse h-full">
          <nav className="mobile-menu__nav flex flex-col items-end gap-6 flex-1">
            {menuMobileLists.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="mobile-menu__item cursor-pointer"
                onClick={toggleMenu}
              >
                {item.link}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu__sidebar flex flex-col ourselves-end gap-6">
            <button
              className="mobile-menu__theme-switch cursor-pointer"
              onClick={toggleTheme}
              title={theme === 'light' ? 'حالت تیره' : 'حالت روشن'}
              aria-label={theme === 'light' ? 'تغییر به حالت تیره' : 'تغییر به حالت روشن'}
            />
          </div>
        </div>
        <div className="mobile-menu__footer flex flex-col items-center gap-4">
          <NavLink to="/" className="mobile-menu__logo cursor-pointer" />
          <span className="mobile-menu__project-name">
           پرو<span className="text-[var(--primary)]">ج</span>ه
          </span>
        </div>
      </div>
    </>
  );
};
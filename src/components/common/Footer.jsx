// کامپوننت فوتر برای نمایش لینک‌ها، شبکه‌های اجتماعی و کپی‌رایت
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { menulists } from '../../assets/data/data.js';
import { BodyOne } from './CustomComponents.jsx';

// بخش اصلی فوتر
export const Footer = () => {
  // تعریف آیکون‌های شبکه‌های اجتماعی
  const socialIcons = [
    { name: 'فیسبوک', icon: <FaFacebookF size={20} className="sm:size-[24px]" />, href: '#' },
    { name: 'اینستاگرام', icon: <AiFillInstagram size={20} className="sm:size-[24px]" />, href: '#' },
    { name: 'توییتر', icon: <FaTwitter size={20} className="sm:size-[24px]" />, href: '#' },
  ];

  return (
    <footer className="footer flex flex-col items-center gap-6 sm:gap-8 py-6 sm:py-8">
      <div className="footer__links flex flex-col sm:flex-row-reverse items-center justify-between w-[90%] sm:w-full max-w-[1200px]">
        <NavLink to="/" className="footer__logo mb-4 sm:mb-0" />
        <nav className="footer__nav flex flex-row flex-direction-row items-center justify-center gap-4 sm:gap-6 flex-wrap mb-4 sm:mb-0">
          {menulists.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="footer__nav-item font-[IRANYekan] text-[12px] sm:text-[16px] text-[var(--text-color)] hover:text-[var(--primary)] transition-colors duration-300"
            >
              {item.link}
            </NavLink>
          ))}
        </nav>
        <div className="footer__social flex flex-row gap-4 sm:gap-6">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="footer__social-icon text-[var(--text-color)] hover:text-[var(--primary)] transition-colors duration-300"
              title={social.name}
              aria-label={`رفتن به ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__divider w-[90%] sm:w-[80%] h-[1px] bg-[#E1E1E1] dark:bg-[#FFFFFF33]" />
      <BodyOne className="footer__copyright text-[12px] sm:text-[14px]">
        <span className="font-[Morabba]">
            <center>تمامی حقوق معنوی و مادی این سایت متعلق به پروجه است. © ۱۴۰۴</center>
        </span>
      </BodyOne>
    </footer>
  );
};
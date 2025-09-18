// تعریف کامپوننت‌های سفارشی برای استفاده در رابط کاربری پروژه
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// کامپوننت عنوان با سطوح مختلف (h1 تا h6)
const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-[Morabba] ${
    level === 1
      ? 'text-[80px] font-[600] text-[var(--primary)]'
      : level === 2
      ? 'text-[40px] font-[700] text-[var(--primary)]'
      : level === 3
      ? 'text-[28px] font-[700] text-[var(--primary)]'
      : level === 4
      ? 'text-[24px] font-[600] text-[var(--primary)]'
      : level === 5
      ? 'text-[22px] font-[600] text-[var(--primary)]'
      : 'text-[18px] font-[500] text-[var(--primary)]'
  } text-right`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

// کامپوننت پاراگراف با فونت معمولی
const BodyOne = ({ children, className }) => {
  return <p className={`text-lg font-[IRANYekanMedium] text-[var(--border-color)] mb-4 text-right ${className}`}>{children}</p>;
};

// کامپوننت پاراگراف با فونت بولد
const BodyTwo = ({ children, className }) => {
  return <p className={`text-base font-[IRANYekanBold] text-[var(--text-color)] text-right ${className}`}>{children}</p>;
};

// کامپوننت کپشن با فونت کوچک
const Caption = ({ children, className }) => {
  return <p className={`text-sm font-[IRANYekanRegular] text-[var(--border-color)] text-right ${className}`}>{children}</p>;
};

// کامپوننت اسپن با فونت کوچک و بولد
const Span = ({ children, className }) => {
  return <span className={`text-xs font-[IRANYekanBold] text-[var(--text-color)] text-right ${className}`}>{children}</span>;
};

// کامپوننت لینک ناوبری با استایل فعال
const CustomNavLink = ({ href, className, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `text-[15px] font-[IRANYekanMedium] text-[var(--text-color)] cursor-pointer list-none ${
          isActive ? 'text-[var(--primary-green)]' : ''
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

// کامپوننت لینک ساده بدون استایل فعال
const CustomLink = ({ href, className, children }) => {
  return (
    <NavLink
      to={href}
      className={`text-[15px] font-[IRANYekanMedium] text-[var(--text-color)] cursor-pointer list-none ${className}`}
    >
      {children}
    </NavLink>
  );
};

// کامپوننت نشان (Badge) برای نمایش اعداد یا آیکون‌ها
const Badges = ({ children, color, className }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center items-center text-white font-[IRANYekanBold] ${className}`}
    >
      {children}
    </div>
  );
};

// خروجی کامپوننت‌ها برای استفاده در پروژه
export { Title, BodyOne, BodyTwo, Caption, Span, Badges, CustomLink, CustomNavLink };

// تعریف PropTypes برای اعتبارسنجی پراپ‌ها
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CustomNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Span.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Badges.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};
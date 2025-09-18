// کامپوننت ساختار اصلی سایت برای ترکیب هدر، فوتر و محتوای اصلی
import { Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { ModelCart } from '../cart/ModelCart.jsx';

// بخش اصلی ساختار صفحه
export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-40">
        <Outlet />
        {children}
      </main>
      <Footer />
      <ModelCart />
    </div>
  );
};
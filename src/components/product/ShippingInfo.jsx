// کامپوننت اطلاعات پشتیبانی برای نمایش ویژگی‌های خدماتی
import { Title, BodyOne } from '../common/CustomComponents.jsx';
import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

// بخش اصلی اطلاعات پشتیبانی
export const ShippingInfo = () => {
  return (
    <section className="container my-16">
      <Title level={3} className="text-center mb-8">اطلاعات پشتیبانی</Title>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="shipping-item text-center p-6 bg-[var(--secondary-bg)] rounded-lg shadow">
          <FaHeadset size={40} className="mx-auto text-[var(--primary-green)]" />
          <BodyOne className="mt-4 font-bold">پشتیبانی ۲۴/۷</BodyOne>
          <BodyOne className="mt-2">ما همیشه در دسترس هستیم.</BodyOne>
        </div>
        <div className="shipping-item text-center p-6 bg-[var(--secondary-bg)] rounded-lg shadow">
          <FaTruck size={40} className="mx-auto text-[var(--primary-green)]" />
          <BodyOne className="mt-4 font-bold">دسترسی آسان</BodyOne>
          <BodyOne className="mt-2">پروژه‌های خود را به راحتی مدیریت کنید.</BodyOne>
        </div>
        <div className="shipping-item text-center p-6 bg-[var(--secondary-bg)] rounded-lg shadow">
          <FaShieldAlt size={40} className="mx-auto text-[var(--primary-green)]" />
          <BodyOne className="mt-4 font-bold">امنیت بالا</BodyOne>
          <BodyOne className="mt-2">اطلاعات شما محافظت می‌شود.</BodyOne>
        </div>
      </div>
    </section>
  );
};
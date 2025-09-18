// کامپوننت فرم پرداخت (در حال توسعه)
import { Title, BodyOne } from '../common/CustomComponents.jsx';

// بخش اصلی فرم پرداخت
export const CheckoutForm = () => {
  return (
    <div className="checkout-form p-6 bg-[var(--secondary-bg)] rounded-lg shadow">
      <Title level={3} className="mb-4">فرم پرداخت</Title>
      <BodyOne>این بخش در حال توسعه است.</BodyOne>
    </div>
  );
};
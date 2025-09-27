// وارد کردن وابستگی‌ها و کامپوننت‌های مورد نیاز
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeFromAllCart, selectTotalPrice, selectTotalQuantity } from '../redux/slice/cartSlice.js';
import bgImage from '../assets/common/Frame.png';
import { BodyOne, Title } from '../components/common/CustomComponents.jsx';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

// کامپوننت اصلی صفحه سبد خرید
export const CartPage = () => {
  // دریافت اطلاعات سبد خرید از استور ریداکس
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  // رندر رابط کاربری صفحه سبد خرید
  return (
    <section className="mt-16">
      {/* هدر صفحه با تصویر پس‌زمینه */}
      <div className="h-[50vh] relative">
        <div className="images absolute top-0 left-0 w-full h-full">
          <img src={bgImage} alt="سبد خرید" className="w-full h-full object-cover" />
        </div>
        <div className="text absolute top-48 left-[45%]">
          <Title level={2} className="text-[var(--secondary)]">سبد خرید</Title>
        </div>
      </div>
      {/* بخش اصلی محتوا */}
      <div className="container flex justify-between flex-col lg:flex-row">
        {/* جدول محصولات سبد خرید */}
        <div className="w-full lg:w-2/3">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-right">
              <thead className="text-xs text-[var(--primary)] uppercase bg-[var(--secondary-bg)]">
                <tr>
                  <th scope="col" className="px-16 py-5">تصویر</th>
                  <th scope="col" className="px-6 py-3">محصول</th>
                  <th scope="col" className="px-6 py-3">قیمت</th>
                  <th scope="col" className="px-6 py-3">تعداد</th>
                  <th scope="col" className="px-6 py-3">جمع</th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      <BodyOne className="text-[var(--text-color)]">سبد خرید خالی است</BodyOne>
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <CartPageCard
                      key={item.id}
                      id={item.id}
                      cover={item.cover}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      totalPrice={item.totalPrice}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* بخش خلاصه سبد خرید */}
        <div className="w-full lg:w-2/6 lg:ml-16 mt-6 lg:mt-0">
          <div className="bg-[var(--secondary-bg)] p-5 rounded-lg">
            <p className="text-lg font-medium text-[var(--primary)]">جمع سبد خرید</p>
            <hr className="my-2 h-[2px] bg-[var(--border-color)]" />
            <div className="text-lg font-medium text-[var(--primary)] flex items-center justify-between">
              <p className="w-32">جمع جزء</p>
              <p className="text-sm font-normal">{totalPrice.toLocaleString('fa-IR')} تومان</p>
            </div>
            <hr className="my-2 h-[2px] bg-[var(--border-color)]" />
            <div className="text-lg font-medium text-[var(--primary)] flex items-center justify-between">
              <p className="w-32">هزینه ارسال</p>
              <p className="text-sm font-normal">برای مشاهده هزینه، آدرس خود را وارد کنید</p>
            </div>
            <hr className="my-2 h-[2px] bg-[var(--border-color)]" />
            <div className="text-lg font-medium text-[var(--primary)] flex items-center justify-between">
              <p className="w-32">جمع کل</p>
              <p className="text-sm font-normal">{totalPrice.toLocaleString('fa-IR')} تومان</p>
            </div>
            <NavLink to="/checkout" className="primary-btn mt-5 block text-center">
              ادامه برای پرداخت
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

// کامپوننت کارت محصول در صفحه سبد خرید
export const CartPageCard = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  // توابع مدیریت تعداد و حذف محصول
  const incCartItems = () => {
    dispatch(addToCart({ id, name, price, images: cover }));
  };
  const removeCartItem = () => {
    dispatch(removeFromCart(id));
  };
  const removeCartItems = () => {
    dispatch(removeFromAllCart(id));
  };

  // رندر رابط کاربری کارت محصول
  return (
    <tr className="bg-white border-b hover:bg-[var(--secondary-bg)]">
      <td className="p-4">
        {cover?.slice(0, 1).map((image, i) => (
          <img
            key={i}
            src={image.image}
            alt={name}
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </td>
      <td className="px-6 py-4">
        <BodyOne className="text-[var(--text-color)]">{name}</BodyOne>
      </td>
      <td className="px-6 py-4">
        <BodyOne className="text-[var(--text-color)]">{price.toLocaleString('fa-IR')} تومان</BodyOne>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={incCartItems}
            className="w-12 h-12 grid place-content-center bg-[var(--secondary-bg)] text-[var(--primary)] border border-[var(--border-color)] rounded"
          >
            <BiPlus size={20} />
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-16 h-12 text-[var(--primary)] outline-none border border-[var(--border-color)] rounded px-4 text-right"
          />
          <button
            onClick={removeCartItem}
            className="w-12 h-12 grid place-content-center bg-[var(--secondary-bg)] text-[var(--primary)] border border-[var(--border-color)] rounded"
          >
            <BiMinus size={20} />
          </button>
        </div>
      </td>
      <td className="px-6 py-4">
        <BodyOne className="text-[var(--primary-green)]">{totalPrice.toLocaleString('fa-IR')} تومان</BodyOne>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={removeCartItems}
          className="w-12 h-12 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white"
        >
          <IoCloseOutline size={25} />
        </button>
      </td>
    </tr>
  );
};
// وارد کردن وابستگی‌ها و کامپوننت‌های مورد نیاز
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCart, IoHeart, IoClose } from 'react-icons/io5';
import { FaEye, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
import { addToFavorites } from '../../redux/slice/favouriteSlice';
import { Title, BodyOne, BodyTwo } from '../common/CustomComponents.jsx';
import PropTypes from 'prop-types';

// کامپوننت اصلی برای نمایش کارت محصول
export const ProductCard = ({ id, title, description, images, category, technologies, creator, price, discount }) => {
  // مدیریت حالت نمایش مودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // دیباگ پراپ creator
  console.log('Creator:', creator);

  // توابع مدیریت باز و بسته کردن مودال و رویدادهای کلیک
  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // افزودن محصول به سبد خرید
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, title, description, images, price: price[0]?.value || 0 }));
  };

  // افزودن محصول به لیست علاقه‌مندی‌ها
  const handleAddToFavourite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToFavorites({ id, title, description, images, price: price[0]?.value || 0 }));
  };

  // مدیریت کلیک روی پس‌زمینه برای بستن مودال
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  // محاسبه قیمت با تخفیف
  const discountedPrice = discount > 0 ? (price[0]?.value || 0) * (1 - discount / 100) : (price[0]?.value || 0);

  // رندر رابط کاربری کارت محصول
  return (
    <>
      {/* ساختار کلی کارت محصول */}
      <div className="product card flex flex-col items-start gap-[10px] w-[100%] sm:w-[300px] lg:w-[280px] h-[400px] sm:h-[280px] animate-slideIn">
        {/* تصویر محصول و اکشن‌های هاور */}
        <div className="images relative w-full h-[13rem]">
          <NavLink to={`/project/${id}`}>
            <img src={images[0]?.image || '/images/default-project.jpg'} alt={title} className="w-full h-full object-cover rounded-[10px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--primary)] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[10px] gap-4">
              <span className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-white text-center px-2">
                {title}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={openModal} className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] bg-[#E6E6E6] dark:bg-[var(--dark)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
                  <FaEye size={16} className="text-black" />
                </button>
                <button onClick={handleAddToFavourite} className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] bg-[#E6E6E6] dark:bg-[var(--dark)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
                  <IoHeart size={16} className="text-black" />
                </button>
                <button onClick={handleAddToCart} className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] bg-[#E6E6E6] dark:bg-[var(--dark)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
                  <IoCart size={16} className="text-black" />
                </button>
              </div>
            </div>
          </NavLink>
        </div>
        {/* اطلاعات سازنده و قیمت محصول */}
        <div className="content flex items-center justify-between w-full mt-3">
          <div className="flex items-center gap-2">
            <img
              src={creator?.avatar || '/images/default-user.jpg'}
              alt={creator?.name || 'کاربر'}
              className="rounded-full w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] object-cover"
            />
            <BodyOne className="text-[var(--text-color)] dark:text-[#E5E7EB] text-[12px] sm:text-[14px] font-[IRANYekan]">
              {creator?.name || 'کاربر ناشناس'}
            </BodyOne>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <BodyOne className="text-[var(--text-color)] dark:text-[#E5E7EB] text-[12px] sm:text-[14px] font-[IRANYekan]">
              {discountedPrice.toLocaleString('fa-IR')} تومان
            </BodyOne>
            {discount > 0 && (
              <BodyTwo className="text-[#FF0000] dark:text-[#FF6666] text-[10px] sm:text-[12px] line-through font-[IRANYekan]">
                {price[0]?.value.toLocaleString('fa-IR')} تومان
              </BodyTwo>
            )}
          </div>
        </div>
      </div>
      {/* مودال برای نمایش جزئیات محصول */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]" onClick={handleBackdropClick}>
          <div className="modal-content bg-[#E5E5E5] dark:bg-[#02142C] w-[80%] h-[80%] max-w-[1200px] p-4 sm:p-6 rounded-[10px] flex flex-col gap-4 sm:gap-6 overflow-y-auto">
            {/* سربرگ مودال با عنوان و دکمه بستن */}
            <div className="flex justify-between items-center">
              <Title level={4} className="text-black text-right font-[IRANYekan]">
                {title}
              </Title>
              <button onClick={closeModal}>
                <IoClose size={20} className="text-black" />
              </button>
            </div>
            {/* تصویر محصول در مودال */}
            <img src={images[0]?.image || '/images/default-project.jpg'} alt={title} className="w-full h-[200px] sm:h-[300px] object-cover rounded-[10px]" />
            {/* جزئیات محصول در مودال */}
            <BodyOne className="text-black text-[12px] sm:text-[14px] text-right font-[IRANYekan]">
              دسته‌بندی: {category}
            </BodyOne>
            <BodyOne className="text-black text-[12px] sm:text-[14px] text-right font-[IRANYekan]">
              تکنولوژی‌ها: {technologies?.join(', ') || 'نامشخص'}
            </BodyOne>
            <BodyTwo className="text-black text-[10px] sm:text-[12px] text-right font-[IRANYekan]">
              {description}
            </BodyTwo>
            {/* قیمت محصول در مودال */}
            <div className="flex items-center gap-1 sm:gap-2">
              <BodyOne className="text-black text-[12px] sm:text-[14px] font-[IRANYekan]">
                {discountedPrice.toLocaleString('fa-IR')} تومان
              </BodyOne>
              {discount > 0 && (
                <BodyTwo className="text-black sm:text-[12px] line-through font-[IRANYekan]">
                  {price[0]?.value.toLocaleString('fa-IR')} تومان
                </BodyTwo>
              )}
            </div>
            {/* دکمه افزودن به سبد خرید در مودال */}
            <button
              className="w-full h-[85px] bg-[var(--primary)] rounded-[10px] font-[IRANYekan] font-medium text-[16px] text-white flex items-center justify-center transition-all duration-300"
              onClick={handleAddToCart}
            >
              افزودن به سبد خرید
            </button>
            <hr className="my-4 sm:my-5 border-[#E1E1E1] dark:border-[#FFFFFF33]" />
            {/* بخش اشتراک‌گذاری در شبکه‌های اجتماعی */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <BodyTwo className="text-black text-[10px] sm:text-[14px] leading-[18px] sm:leading-[24px] text-right">
                اشتراک‌گذاری:
              </BodyTwo>
              <div className="flex items-center gap-2 sm:gap-3">
                <FaFacebookF size={14} className="sm:size-[20px] text-black hover:scale-110 hover:text-[var(--primary)] transition-all duration-300" />
                <AiFillInstagram size={14} className="sm:size-[20px] text-black hover:scale-110 hover:text-[var(--primary)] transition-all duration-300" />
                <FaTwitter size={14} className="sm:size-[20px] text-black hover:scale-110 hover:text-[var(--primary)] transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// تعریف پراپ‌تایپ‌ها برای بررسی نوع پراپ‌ها
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  creator: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  price: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  discount: PropTypes.number.isRequired,
};
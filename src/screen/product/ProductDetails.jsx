// وارد کردن وابستگی‌ها و کامپوننت‌های مورد نیاز
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice.js";
import { addToFavorites } from "../../redux/slice/favouriteSlice.js";
import { projects } from "../../assets/data/data.js";
import { Title, BodyOne, BodyTwo } from "../../components/common/CustomComponents.jsx";
import { ProductSlide } from "../../components/product/ProductSlide.jsx";
import { InstagramPost } from "../../components/hero/InstagramPost.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoCart, IoHeart, IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// کامپوننت اصلی برای نمایش جزئیات پروژه
export const ProductDetails = () => {
  // دریافت آیدی پروژه از URL و پیدا کردن پروژه
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  // مدیریت تعداد محصول
  const [quantity, setQuantity] = useState(1);

  // نمایش پیام در صورت عدم وجود پروژه
  if (!project) {
    return <div className="container py-20 text-[var(--text-color)] text-center">پروژه یافت نشد</div>;
  }

  // استخراج اطلاعات پروژه
  const { title, description, images, category, technologies, creator, price, discount } = project;
  // محاسبه قیمت با تخفیف
  const discountedPrice = discount > 0 ? price[0].value * (1 - discount / 100) : price[0].value;

  // تنظیمات اسلایدر تصاویر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <img src={images[i].image} alt="" className="w-16 h-16 object-cover rounded" />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  // افزودن به سبد خرید
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, description, images, price: price[0].value }));
  };

  // افزودن به علاقه‌مندی‌ها
  const handleAddToFavourite = () => {
    dispatch(addToFavorites({ id, title, description, images, price: price[0].value }));
  };

  // رندر رابط کاربری جزئیات پروژه
  return (
    <section className="container py-20">
      {/* ساختار دو ستونه برای نمایش تصویر و اطلاعات */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* بخش اسلایدر تصاویر */}
        <div className="left">
          <Slider {...settings}>
            {images.map((img, i) => (
              <div key={i}>
                <img src={img.image} alt={title} className="w-full h-[50vh] object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
        {/* بخش اطلاعات پروژه */}
        <div className="right flex flex-col gap-4">
          <Title level={2}>{title}</Title>
          <BodyOne className="text-base">{description}</BodyOne>
          {/* اطلاعات سازنده */}
          <div className="flex items-center gap-2 flex-row-reverse">
            <img
              src={creator?.avatar || '/images/placeholder.png'}
              alt={creator?.name || 'نامشخص'}
              className="w-8 h-8 rounded-full object-cover"
            />
            <BodyTwo>سازنده: {creator?.name || 'نامشخص'}</BodyTwo>
          </div>
          <BodyTwo>دسته‌بندی: {category}</BodyTwo>
          <BodyTwo>تکنولوژی‌ها: {technologies?.join("، ") || 'نامشخص'}</BodyTwo>
          {/* نمایش قیمت و تخفیف */}
          <div className="flex items-center gap-2 mt-2 flex-row-reverse">
            <BodyTwo className="text-[var(--primary-green)]">
              {discountedPrice.toLocaleString('fa-IR')} تومان
            </BodyTwo>
            {discount > 0 && (
              <BodyTwo className="text-[var(--border-color)] line-through">
                {price[0].value.toLocaleString('fa-IR')} تومان
              </BodyTwo>
            )}
          </div>
          {/* مدیریت تعداد و دکمه‌های سبد خرید و علاقه‌مندی */}
          <div className="flex items-center gap-3 mt-4 flex-row-reverse">
            <button
              className="w-12 h-12 grid place-items-center bg-[var(--secondary-bg)] text-[var(--primary)] border border-[var(--border-color)] rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              <IoCart size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 text-[var(--primary)] outline-none border border-[var(--border-color)] rounded-lg px-4 text-right"
            />
            <button
              className="w-12 h-12 grid place-items-center bg-[var(--secondary-bg)] text-[var(--primary)] border border-[var(--border-color)] rounded-lg"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              <IoClose size={20} />
            </button>
            <button className="primary-btn flex items-center gap-2" onClick={handleAddToCart}>
              <IoCart size={20} />
              افزودن به سبد پروژه‌ها
            </button>
          </div>
          <div className="flex items-center gap-3 mt-4 flex-row-reverse">
            <button className="secondary-btn flex items-center gap-2" onClick={handleAddToFavourite}>
              <IoHeart size={20} />
              افزودن به علاقه‌مندی‌ها
            </button>
          </div>
          <hr className="my-5" />
          {/* بخش اشتراک‌گذاری در شبکه‌های اجتماعی */}
          <div className="flex flex-col gap-4">
            <BodyTwo>اشتراک‌گذاری:</BodyTwo>
            <div className="flex items-center gap-3">
              <FaFacebookF size={20} />
              <AiFillInstagram size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* بخش توضیحات و مشخصات پروژه */}
      <div className="my-10">
        <Title level={3}>توضیحات پروژه</Title>
        <BodyOne className="text-base">{description}</BodyOne>
        <Title level={3} className="mt-6">مشخصات</Title>
        <div className="flex flex-col gap-3">
          <BodyOne>دسته‌بندی: {category}</BodyOne>
          <BodyOne>تکنولوژی‌ها: {technologies?.join("، ") || 'نامشخص'}</BodyOne>
          <BodyOne>سازنده: {creator?.name || 'نامشخص'}</BodyOne>
        </div>
      </div>
      {/* بخش پروژه‌های مرتبط */}
      <Title level={3}>پروژه‌های مرتبط</Title>
      <ProductSlide />
      <InstagramPost />
    </section>
  );
};
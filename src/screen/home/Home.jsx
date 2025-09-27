// وارد کردن کامپوننت‌های مورد نیاز
import { Caption, Title } from "../../components/common/CustomComponents.jsx";
import { BlogSlider } from "../../components/hero/BlogSlider.jsx";
import { Banner } from "./../../components/product/Banner.jsx";
import { ProductSlide } from "./../../components/product/ProductSlide.jsx";
import { ShippingInfo } from "./../../components/product/ShippingInfo.jsx";
import { Hero } from "../../components/hero/Hero.jsx";
import { InstagramPost } from "../../components/hero/InstagramPost.jsx";
import { Testimonials } from "../../components/hero/Testimonials.jsx";
import { Product } from "../product/Product.jsx";
// کامپوننت اصلی صفحه اصلی
export const Home = () => {
  // رندر رابط کاربری صفحه اصلی
  return (
    <section className="animate-slideIn">
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />
      {/* بخش محصولات اخیر */}
      <div className="container my-16 slideproduct">
        <Title level={3}>محصولات اخیر</Title>
        <Caption>محبوب‌ترین محصولات در فروشگاه ما را کشف کنید.</Caption>
      </div>
      <ProductSlide />
      <InstagramPost />
      <BlogSlider/>
    </section>
  );
};
// کامپوننت اسلایدر محصولات برای نمایش پروژه‌های برجسته
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../../assets/data/data.js';
import { ProductCard } from './ProductCard.jsx';
import { Title } from '../common/CustomComponents.jsx';

// بخش اصلی اسلایدر
export const ProductSlide = () => {
  // تنظیمات اسلایدر برای نمایش responsive
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // رندر اسلایدر و کارت‌های محصولات
  return (
    <section className="container my-16">
      <Title level={3} className="text-center mb-8">پروژه‌های برجسته</Title>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <ProductCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              price={project.price} // به جای project.price[0].value
              discount={project.discount}
              rating={project.rating}
              category={project.category}
              technologies={project.technologies}
              creator={project.creator}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
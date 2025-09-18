// کامپوننت اسلایدر مقالات برای نمایش پست‌های بلاگ
import { blogPosts } from '../../assets/data/data.js';
import { Title } from '../common/CustomComponents.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// بخش اصلی اسلایدر
export const BlogSlider = () => {
  // تنظیمات اسلایدر برای نمایش responsive
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  // رندر اسلایدر و کارت‌های مقالات
  return (
    <section className="blog-slider relative container mx-auto px-4">
      <Title level={3} className="text-center mb-8 font-iranyekan text-[var(--text-color)]">
        مقالات و اخبار
      </Title>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card px-2">
            <div className="flex flex-col items-center gap-5">
              <div
                className="image-container w-full max-w-[305px] h-[253px] bg-cover rounded-3xl shadow-md"
                style={{
                  backgroundImage: `url(${post.image})`,
                }}
              />
              <Title
                level={5}
                className="font-iranyekan text-xl font-bold text-center text-[var(--text-color)]"
              >
                {post.title}
              </Title>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
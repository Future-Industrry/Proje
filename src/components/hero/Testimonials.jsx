// کامپوننت نمایش نظرات کاربران
import { testimonials } from '../../assets/data/data.js';
import { Title, BodyOne } from '../common/CustomComponents.jsx';

// بخش اصلی برای نمایش کارت‌های نظرات
export const Testimonials = () => {
  return (
    <section className="container my-16">
      <Title level={3} className="text-center mb-8">نظرات کاربران</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card p-6 border rounded-lg shadow bg-[var(--secondary-bg)]"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <BodyOne className="text-center font-bold">{testimonial.name}</BodyOne>
            <BodyOne className="text-center mt-2">{testimonial.text}</BodyOne>
          </div>
        ))}
      </div>
    </section>
  );
};
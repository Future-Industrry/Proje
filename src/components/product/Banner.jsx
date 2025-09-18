// کامپوننت بنر برای نمایش پروژه‌های ویژه
import { promotionalInfo } from '../../assets/data/data.js';
import { Title, BodyOne } from '../common/CustomComponents.jsx';

// بخش اصلی بنر
export const Banner = () => {
  return (
    <section className="container my-16">
      <Title level={3} className="text-center mb-8">پروژه‌های ویژه</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotionalInfo.map((item) => (
          <div
            key={item.id}
            className="banner flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg bg-[var(--secondary-bg)] shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded"
            />
            <div className="flex flex-col gap-2">
              <Title level={4}>{item.title}</Title>
              <BodyOne>{item.description}</BodyOne>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
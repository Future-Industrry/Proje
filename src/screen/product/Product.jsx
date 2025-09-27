// وارد کردن داده‌ها و کامپوننت‌های مورد نیاز
import { projects } from "../../assets/data/data.js";
import { BodyOne, Title } from "../../components/common/CustomComponents.jsx";
import { ProductCard } from "../../components/product/ProductCard.jsx";

// کامپوننت اصلی برای نمایش پروژه‌های پرطرفدار
export const Product = () => {
  // فیلتر کردن پروژه‌های پرطرفدار
  const featuredProjects = projects.filter((project) => project.featured);

  // رندر رابط کاربری بخش پروژه‌ها
  return (
    <section className="py-20 bg-[var(--bg-color)]">
      <div className="container">
        <Title level={4}>پروژه‌های پرطرفدار</Title>
        {/* نمایش تعداد کل پروژه‌ها و پروژه‌های نرم‌افزاری */}
        <div className="flex items-center gap-3 uppercase flex-row-reverse">
          <BodyOne className="text-sm">همه پروژه‌ها ({projects.length})</BodyOne>
          <BodyOne className="text-sm text-[var(--primary-green)]">
            پروژه‌های نرم‌افزاری ({projects.filter((p) => p.category === "پروژه‌های نرم‌افزاری").length})
          </BodyOne>
        </div>
        {/* نمایش کارت‌های پروژه‌های پرطرفدار */}
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredProjects.map((project) => (
            <ProductCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              price={project.price}
              discount={project.discount}
              rating={project.rating}
              featured={project.featured}
              category={project.category}
              technologies={project.technologies}
              creator={project.creator}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
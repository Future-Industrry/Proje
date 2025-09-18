// کامپوننت هیرو (بنر اصلی) صفحه اصلی
import { Title } from '../common/CustomComponents.jsx';

// بخش اصلی هیرو
export const Hero = () => {
  return (
    <section className="hero relative bg-[var(--bg-color)] h-[180px] sm:h-[500px] overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <div
        className="absolute w-[90%] h-[180px] sm:h-[500px] left-[calc(50%-45%)] top-0 opacity-20 bg-[url('/background_hero.png')] bg-cover bg-center bg-blend-multiply"
      />

      {/* تصویر اصلی هیرو */}
      <img
        src="/hero.png"
        alt="Hero Image"
        className="absolute w-full h-[80px] sm:h-[250px] left-0 top-[20px] sm:top-[50px] mx-auto"
      />

      {/* متن هیرو */}
      <div className="absolute w-[90%] sm:w-[800px] left-[calc(50%-45%)] sm:left-[calc(50%-400px)] top-[20px] sm:top-[120px] flex flex-col items-center gap-6 sm:gap-8">
        <Title
          level={3}
          className="text-[31px] sm:text-[64px] font-[IRANYekan] font-black leading-[36px] sm:leading-[80px] text-center text-[var(--text-color)] dark:text-[var(--text-color)]"
        >
          با پرو<span className="text-[var(--primary)]">ج</span>ه،پروژت تو <span className="text-[var(--primary)]">ج</span>یبته
        </Title>
        <Title
          level={7}
          className="text-[10px] sm:text-[32px] font-[IRANYekan] font-extrabold leading-[24px] sm:leading-[40px] text-center text-[var(--text-color)] dark:text-[var(--text-color)]"
        >
          کیفیت و اعتماد، در هر پروژه
        </Title>
      </div>
    </section>
  );
};
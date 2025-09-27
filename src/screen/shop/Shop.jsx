// وارد کردن وابستگی‌ها و کامپوننت‌های مورد نیاز
import { useState } from "react";
import { projects, categories } from "../../assets/data/data.js";
import { ProductCard } from "../../components/product/ProductCard.jsx";
import { Title, BodyOne } from "../../components/common/CustomComponents.jsx";
import { BlogSlider } from "../../components/hero/BlogSlider.jsx";
import { Hero } from "./../../components/hero/Hero.jsx";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown, IoFilter } from "react-icons/io5";

// کامپوننت اصلی صفحه فروشگاه
export const Shop = () => {
  // مدیریت حالت‌های مختلف صفحه
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [visibleCount, setVisibleCount] = useState(16);
  const [sortType, setSortType] = useState("محبوب‌ترین");
  const [dateFilter, setDateFilter] = useState("همه زمان‌ها");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);

  // فیلتر کردن پروژه‌ها بر اساس جستجو و دسته‌بندی
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "همه" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // اعمال مرتب‌سازی و فیلتر تاریخ
  const applySortAndDate = (projects) => {
    let sorted = [...projects];
    
    // مرتب‌سازی بر اساس نوع
    if (sortType === "گران‌ترین") {
      sorted.sort((a, b) => (b.price[0]?.value || 0) - (a.price[0]?.value || 0));
    } else if (sortType === "ارزان‌ترین") {
      sorted.sort((a, b) => (a.price[0]?.value || 0) - (b.price[0]?.value || 0));
    } else if (sortType === "جدیدترین") {
      sorted.sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
    } else if (sortType === "قدیمی‌ترین") {
      sorted.sort((a, b) => new Date(a.publishDate || 0) - new Date(a.publishDate || 0));
    } else if (sortType === "محبوب‌ترین") {
      sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    // فیلتر بر اساس تاریخ
    const now = new Date();
    if (dateFilter === "الان") {
      sorted = sorted.filter((p) => new Date(p.publishDate).toDateString() === now.toDateString());
    } else if (dateFilter === "هفته گذشته") {
      const lastWeek = new Date(now.setDate(now.getDate() - 7));
      sorted = sorted.filter((p) => new Date(p.publishDate) >= lastWeek);
    } else if (dateFilter === "ماه گذشته") {
      const lastMonth = new Date(now.setFullYear(now.getFullYear(), now.getMonth() - 1));
      sorted = sorted.filter((p) => new Date(p.publishDate) >= lastMonth);
    } else if (dateFilter === "سال گذشته") {
      const lastYear = new Date(now.setFullYear(now.getFullYear() - 1));
      sorted = sorted.filter((p) => new Date(p.publishDate) >= lastYear);
    }

    return sorted;
  };

  // مدیریت انتخاب مرتب‌سازی
  const handleSortSelect = (type) => {
    setSortType(type);
    setIsSortDropdownOpen(false);
  };

  // مدیریت انتخاب فیلتر تاریخ
  const handleDateSelect = (date) => {
    setDateFilter(date);
    setIsDateDropdownOpen(false);
  };

  // تغییر وضعیت فیلتر
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // بارگذاری پروژه‌های بیشتر
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const sortedAndFilteredProjects = applySortAndDate(filteredProjects);

  // رندر رابط کاربری صفحه فروشگاه
  return (
    <>
      {/* بخش هیرو */}
      <section className="w-full animate-slideIn">
        <Hero />
      </section>
      {/* بخش اصلی فروشگاه */}
      <section className="container py-10 sm:py-12">
        <Title level={3} className="text-[var(--text-color)] mb-5 sm:mb-6 text-center">

        </Title>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6">
          {/* ورودی جستجو با آیکون فیلتر */}
          <div className="relative w-[90%] sm:w-[800px]">
            <input
              type="text"
              placeholder="دنبال چی هستی!؟"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[36px] sm:h-[56px] pr-10 sm:pr-12 pl-4 bg-[#E5E5E5] dark:bg-[var(--dark)] text-[var(--text-color)] font-[IRANYekan] font-medium text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-right rounded-full focus:outline-none focus:bg-transparent focus:border focus:border-[var(--primary)] hover:bg-transparent hover:border hover:border-[var(--primary)] transition-all duration-300"
            />
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 sm:w-8 h-7 sm:h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
              <CiSearch color="white" size={20} />
            </div>
          </div>
          {/* دکمه‌های فیلتر و دسته‌بندی */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              className="px-2 sm:px-3 py-1 sm:py-1.5 h-[32px] sm:h-[36px] w-[65px] sm:w-[90px] bg-white dark:bg-[var(--dark)] text-black dark:text-white border border-black dark:border-white rounded-[25px] font-[IRANYekan] font-normal text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-300"
              onClick={toggleFilter}
            >
              <IoFilter color="black" size={14} className="dark:text-white" />
              <span>فیلتر</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 h-[32px] sm:h-[36px] w-[70px] sm:w-[100px] rounded-[25px] font-[IRANYekan] font-light text-[11px] sm:text-[14px] leading-[18px] sm:leading-[22px] transition-all duration-300 flex items-center justify-center ${
                  selectedCategory === category.name
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[#E1E1E1] dark:bg-[#E1E1E1] text-black opacity-88"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* بخش فیلترها وقتی فیلتر باز است */}
          {isFilterOpen && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-[90%] sm:w-[800px] mx-auto">
              {/* دراپ‌داون مرتب‌سازی */}
              <div className="relative w-full sm:w-[400px] h-[50px] bg-[#E1E1E1] rounded-[10px] shadow-sm">
                <div
                  className="flex items-center justify-between w-full h-full px-4 cursor-pointer"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                >
                  <span className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right">
                    فیلتر براساس: {sortType}
                  </span>
                  <IoChevronDown
                    className="text-black dark:text-[#D1D5DB]"
                    size={16}
                  />
                </div>
                {isSortDropdownOpen && (
                  <div className="absolute w-full h-auto bg-[#E5E5E5] dark:bg-[#02142C] rounded-[10px] top-[58px] left-0 z-10 shadow-sm">
                    <div className="w-[95%] h-[40px] bg-[rgba(229,229,229,0.5)] dark:bg-[#1A2A44] rounded-[8px] mx-auto mt-2 flex items-center justify-end px-4">
                      <span
                        className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right cursor-pointer"
                        onClick={() => handleSortSelect('محبوب‌ترین')}
                      >
                        محبوب‌ترین
                      </span>
                    </div>
                    {['گران‌ترین', 'ارزان‌ترین', 'جدیدترین', 'قدیمی‌ترین'].map((type) => (
                      <div
                        key={type}
                        className="w-[95%] h-[40px] mx-auto mt-2 flex items-center justify-end px-4"
                      >
                        <span
                          className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right cursor-pointer"
                          onClick={() => handleSortSelect(type)}
                        >
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* دراپ‌داون تاریخ */}
              <div className="relative w-full sm:w-[400px] h-[50px] bg-[#E1E1E1] rounded-[10px] shadow-sm">
                <div
                  className="flex items-center justify-between w-full h-full px-4 cursor-pointer"
                  onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                >
                  <span className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right">
                    تاریخ انتشار: {dateFilter}
                  </span>
                  <IoChevronDown
                    className="text-black"
                    size={16}
                  />
                </div>
                {isDateDropdownOpen && (
                  <div className="absolute w-full h-auto bg-[#E5E5E5] dark:bg-[#02142C] rounded-[10px] top-[58px] left-0 z-10 shadow-sm">
                    <div className="w-[95%] h-[40px] bg-[rgba(229,229,229,0.5)] dark:bg-[#1A2A44] rounded-[8px] mx-auto mt-2 flex items-center justify-end px-4">
                      <span
                        className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right cursor-pointer"
                        onClick={() => handleDateSelect('الان')}
                      >
                        الان
                      </span>
                    </div>
                    {['هفته گذشته', 'ماه گذشته', 'سال گذشته', 'همه زمان‌ها'].map((date) => (
                      <div
                        key={date}
                        className="w-[95%] h-[40px] mx-auto mt-2 flex items-center justify-end px-4"
                      >
                        <span
                          className="font-[IRANYekan] font-medium text-[14px] sm:text-[16px] text-black text-right cursor-pointer"
                          onClick={() => handleDateSelect(date)}
                        >
                          {date}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* نمایش پروژه‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-[95%] sm:w-[90%] lg:w-[1200px] mx-auto mt-8 sm:mt-12">
          {sortedAndFilteredProjects.length === 0 ? (
            <BodyOne className="text-center text-sm sm:text-base col-span-1 sm:col-span-2 lg:col-span-4">
              پروژه‌ای یافت نشد
            </BodyOne>
          ) : (
            sortedAndFilteredProjects.slice(0, visibleCount).map((project) => (
              <ProductCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
                category={project.category}
                technologies={project.technologies}
                creator={project.creator}
                price={project.price}
                discount={project.discount}
              />
            ))
          )}
        </div>
        {/* دکمه بارگذاری بیشتر */}
        {visibleCount < sortedAndFilteredProjects.length && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              className="w-[200px] sm:w-[280px] h-[50px] sm:h-[60px] bg-[#E6E6E6] dark:bg-[var(--dark)] rounded-[38px] font-[IRANYekan] font-medium text-[16px] sm:text-[20px] leading-[28px] sm:leading-[34px] text-black flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:text-white mb-10"
              onClick={loadMore}
            >
              پروژه‌های بیشتر
            </button>
          </div>
        )}
        <BlogSlider />
      </section>
    </>
  );
};
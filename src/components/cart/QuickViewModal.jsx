// کامپوننت مودال نمایش سریع پروژه‌ها برای مشاهده جزئیات و افزودن به سبد خرید
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/slice/cartSlice';
import { IoClose } from 'react-icons/io5';

// بخش اصلی کامپوننت برای نمایش جزئیات پروژه
export const QuickViewModal = ({ project, onClose }) => {
  const dispatch = useDispatch();
  // مدیریت انتخاب رنگ و قیمت پروژه
  const [selectedColor, setSelectedColor] = useState(project?.price[0]?.color || '');
  const selectedPrice = project?.price.find(p => p.color === selectedColor)?.value || project?.price[0]?.value || 0;
  const discountedPrice = project?.discount > 0 ? selectedPrice * (1 - project.discount / 100) : selectedPrice;

  // تابع برای افزودن پروژه به سبد خرید
  const handleAddToCart = () => {
    dispatch(addCartItem({ id: project.id, title: project.title, description: project.description, images: project.images, price: selectedPrice }));
    onClose();
  };

  // رندر رابط کاربری مودال
  return (
    <>
      <div className="cartoverlay fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="modal-overlay fixed top-10 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl bg-[var(--bg-color)] rounded-lg shadow-lg z-50 p-6">
        <div className="modal-overlay__header flex justify-between items-center mb-4">
          <h2 className="modal-overlay__title font-iranyekanBold text-2xl">{project.title}</h2>
          <button className="modal-overlay__close" onClick={onClose} aria-label="بستن مودال">
            <IoClose size={24} />
          </button>
        </div>
        <div className="modal-overlay__content flex flex-col md:flex-row gap-6">
          <img
            src={project.images[0]?.image || '/images/placeholder.png'}
            alt={project.title}
            className="modal-overlay__image w-full md:w-1/2 h-[40vh] object-cover rounded"
          />
          <div className="flex-1 flex flex-col gap-4">
            <p className="modal-overlay__description text-[var(--text-color)]">{project.description}</p>
            <p className="text-lg font-[IRANYekanBold] text-[var(--text-color)]">
              دسته‌بندی: {project.category}
            </p>
            <p className="text-lg font-[IRANYekanBold] text-[var(--text-color)]">
              تکنولوژی‌ها: {project.technologies?.join(', ') || 'نامشخص'}
            </p>
            <p className="text-lg font-[IRANYekanBold] text-[var(--text-color)]">
              سازنده: {project.creator?.name || 'نامشخص'}
            </p>
            <div className="flex items-center gap-2">
              <span>رنگ:</span>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="p-2 border rounded text-right"
              >
                {project.price.map(p => (
                  <option key={p.color} value={p.color}>{p.color}</option>
                ))}
              </select>
            </div>
            <p className="text-lg font-[IRANYekanBold] text-[var(--accent-color)]">
              قیمت: {discountedPrice.toLocaleString('fa-IR')} تومان
              {project.discount > 0 && (
                <span className="text-sm text-[var(--border-color)] line-through ml-2">
                  {selectedPrice.toLocaleString('fa-IR')} تومان
                </span>
              )}
            </p>
            <button className="primary-btn bg-[var(--primary)] text-white px-6 py-3 rounded" onClick={handleAddToCart}>
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
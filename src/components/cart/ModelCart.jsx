import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart, removeFromCart, removeFromAllCart, addToCart, setActiveTab } from '../../redux/slice/cartSlice';
import { removeFromFavorites } from '../../redux/slice/favouriteSlice';
import { IoClose, IoCart, IoHeart } from 'react-icons/io5';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Title, BodyOne } from '../common/CustomComponents.jsx';

export const ModelCart = () => {
  const dispatch = useDispatch();
  const { isOpen, activeTab, itemList } = useSelector((state) => state.cart);
  const favoriteItems = useSelector((state) => state.favorites.favoritesItemList);

  const totalPrice = itemList.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalQuantity = itemList.reduce((acc, item) => acc + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="cartoverlay fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => dispatch(closeCart())} />
      <div className="modal-cart fixed top-[120px] left-0 right-0 mx-auto w-[95%] max-w-3xl bg-[var(--bg-color)] rounded-lg shadow-lg z-50 p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <Title level={3} className="font-bold text-[var(--text-color)]">
            {activeTab === 'cart' ? 'سبد خرید' : 'علاقه‌مندی‌ها'}
          </Title>
          <button
            className="p-2 hover:bg-[var(--primaryLight)] rounded-full transition-colors"
            onClick={() => dispatch(closeCart())}
            aria-label="بستن مودال"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="tabs flex flex-row-reverse gap-4 mb-6">
          <button
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'cart'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--secondary-bg)] text-[var(--text-color)] hover:bg-[var(--primaryLight)]'
            }`}
            onClick={() => dispatch(setActiveTab('cart'))}
          >
            <IoCart className="inline ml-2" /> سبد خرید
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'favorites'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--secondary-bg)] text-[var(--text-color)] hover:bg-[var(--primaryLight)]'
            }`}
            onClick={() => dispatch(setActiveTab('favorites'))}
          >
            <IoHeart className="inline ml-2" /> علاقه‌مندی‌ها
          </button>
        </div>
        <div className="content overflow-y-auto h-[calc(100vh-220px)]">
          {activeTab === 'cart' && (
            <div className="cart-items flex flex-col gap-4">
              {itemList.length === 0 ? (
                <BodyOne className="text-center py-8">سبد خرید خالی است</BodyOne>
              ) : (
                <>
                  {itemList.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[80px_1fr_120px] items-center gap-4 p-4 border-b border-[var(--border-color)] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={item.cover[0]?.image || '/images/placeholder.png'}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col gap-2">
                        <BodyOne className="font-bold text-right">{item.name}</BodyOne>
                        <BodyOne>{item.price.toLocaleString('fa-IR')} تومان</BodyOne>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  id: item.id,
                                  title: item.name,
                                  description: item.description,
                                  images: item.cover,
                                  price: item.price,
                                })
                              )
                            }
                            className="p-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryLight)] hover:text-[var(--primary)] transition-colors"
                          >
                            <BiPlus size={20} />
                          </button>
                          <BodyOne className="font-bold">{item.quantity}</BodyOne>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="p-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryLight)] hover:text-[var(--primary)] transition-colors"
                          >
                            <BiMinus size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BodyOne className="font-bold">{item.totalPrice.toLocaleString('fa-IR')} تومان</BodyOne>
                        <button
                          onClick={() => dispatch(removeFromAllCart(item.id))}
                          className="p-3 bg-[var(--primary-green)] text-white rounded-lg hover:bg-red-500 transition-colors"
                        >
                          <IoClose size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-row-reverse justify-between items-center mt-6 p-4 bg-[var(--secondary-bg)] rounded-lg">
                    <BodyOne className="font-bold">جمع کل: {totalPrice.toLocaleString('fa-IR')} تومان</BodyOne>
                    <BodyOne className="font-bold">تعداد: {totalQuantity}</BodyOne>
                  </div>
                  <NavLink
                    to="/cart"
                    className="mt-4 p-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryLight)] hover:text-[var(--primary)] transition-colors text-center"
                    onClick={() => dispatch(closeCart())}
                  >
                    مشاهده سبد خرید
                  </NavLink>
                </>
              )}
            </div>
          )}
          {activeTab === 'favorites' && (
            <div className="favorite-items flex flex-col gap-4">
              {favoriteItems.length === 0 ? (
                <BodyOne className="text-center py-8">هیچ علاقه‌مندی‌ای وجود ندارد</BodyOne>
              ) : (
                favoriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[80px_1fr_120px] items-center gap-4 p-4 border-b border-[var(--border-color)] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.cover[0]?.image || '/images/placeholder.png'}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex flex-col gap-2">
                      <BodyOne className="font-bold text-right">{item.name}</BodyOne>
                      <BodyOne>{item.price.toLocaleString('fa-IR')} تومان</BodyOne>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                              title: item.name,
                              description: item.description,
                              images: item.cover,
                              price: item.price,
                            })
                          )
                        }
                        className="p-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryLight)] hover:text-[var(--primary)] transition-colors"
                      >
                        <IoCart size={20} />
                      </button>
                      <button
                        onClick={() => dispatch(removeFromFavorites(item.id))}
                        className="p-3 bg-[var(--primary-green)] text-white rounded-lg hover:bg-red-500 transition-colors"
                      >
                        <IoClose size={24} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
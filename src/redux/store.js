// وارد کردن کتابخانه برای تنظیم استور ریداکس
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import favouriteReducer from './slice/favouriteSlice';

// تنظیم استور ریداکس با ردیوسرهای سبد خرید و علاقه‌مندی‌ها
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favouriteReducer,
  },
});
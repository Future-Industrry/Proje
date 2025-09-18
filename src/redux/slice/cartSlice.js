// وارد کردن کتابخانه برای ایجاد اسلایس ریداکس
import { createSlice } from '@reduxjs/toolkit';

// تعریف اسلایس برای مدیریت سبد خرید
const cartSlice = createSlice({
  name: 'cart',
  // حالت اولیه سبد خرید
  initialState: {
    isOpen: false,
    activeTab: 'cart',
    itemList: [],
  },
  // تعریف ردیوسرها برای مدیریت اقدامات سبد خرید
  reducers: {
    // باز کردن سبد خرید
    openCart: (state) => {
      state.isOpen = true;
    },
    // بستن سبد خرید
    closeCart: (state) => {
      state.isOpen = false;
    },
    // تنظیم تب فعال
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    // افزودن محصول به سبد خرید
    addToCart: (state, action) => {
      const { id, title, description, images, price } = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.itemList.push({
          id,
          name: title,
          description,
          cover: images,
          price,
          quantity: 1,
          totalPrice: price,
        });
      }
    },
    // حذف یک واحد از محصول در سبد خرید
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    // حذف کامل محصول از سبد خرید
    removeFromAllCart: (state, action) => {
      const id = action.payload;
      state.itemList = state.itemList.filter((item) => item.id !== id);
    },
  },
});

// توابع انتخاب‌گر برای محاسبه تعداد کل و قیمت کل
export const selectTotalQuantity = (state) =>
  state.cart.itemList.reduce((acc, item) => acc + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.itemList.reduce((acc, item) => acc + item.totalPrice, 0);

// اکسپورت اکشن‌ها و ردیوسر
export const { openCart, closeCart, setActiveTab, addToCart, removeFromCart, removeFromAllCart } = cartSlice.actions;
export default cartSlice.reducer;
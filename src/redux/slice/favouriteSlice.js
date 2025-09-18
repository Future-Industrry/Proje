// وارد کردن کتابخانه برای ایجاد اسلایس ریداکس
import { createSlice } from '@reduxjs/toolkit';

// تعریف اسلایس برای مدیریت لیست علاقه‌مندی‌ها
const favouriteSlice = createSlice({
  name: 'favorites',
  // حالت اولیه لیست علاقه‌مندی‌ها
  initialState: {
    favoritesItemList: [],
  },
  // تعریف ردیوسرها برای مدیریت اقدامات علاقه‌مندی‌ها
  reducers: {
    // افزودن محصول به لیست علاقه‌مندی‌ها
    addToFavorites: (state, action) => {
      const { id, title, description, images, price } = action.payload;
      const existingItem = state.favoritesItemList.find((item) => item.id === id);
      if (!existingItem) {
        state.favoritesItemList.push({
          id,
          name: title,
          description,
          cover: images,
          price,
        });
      }
    },
    // حذف محصول از لیست علاقه‌مندی‌ها
    removeFromFavorites: (state, action) => {
      const id = action.payload;
      state.favoritesItemList = state.favoritesItemList.filter((item) => item.id !== id);
    },
  },
});

// اکسپورت اکشن‌ها و ردیوسر
export const { addToFavorites, removeFromFavorites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
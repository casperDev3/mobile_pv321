import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavoriteState {
  products: number[];
}

const initialState: FavoriteState = {
  products: [],
};

export const favoriteSlice = createSlice({
  name: 'FavoriteSlice',
  initialState,
  reducers: {
    increment: state => {
      state.products = [...state.products, 1];
    },
    addToFavorite: (state, action: PayloadAction<number>) => {
      state.products.includes(action.payload)
        ? (state.products = [
            ...state.products.filter((el: number) => el !== action.payload),
          ])
        : (state.products = [...state.products, action.payload]);
    },
    clearFavorite: state => {
      state.products = [];
    },
  },
});

export const {increment, addToFavorite, clearFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;

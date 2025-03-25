import {createSlice} from '@reduxjs/toolkit';

interface FavoriteState {
  products: number[];
}

const initialState: FavoriteState = {
  products: [2],
};

export const favoriteSlice = createSlice({
  name: 'FavoriteSlice',
  initialState,
  reducers: {
    increment: state => {
      state.products = [...state.products, 1];
    },
  },
});

export const {increment} = favoriteSlice.actions;
export default favoriteSlice.reducer;

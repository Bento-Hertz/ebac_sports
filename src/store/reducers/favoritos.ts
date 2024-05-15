import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduto } from '../../interfaces/IProduto';

const initialState: IProduto[] = [];

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<IProduto>) => {
      const produto = action.payload;

      if (state.find((produtoFavorito) => produtoFavorito.id === produto.id))
        return state.filter(
          (produtoFavorito) => produtoFavorito.id !== produto.id
        );
      else {
        state.push(produto);
      }
    }
  }
});

export default favoritosSlice.reducer;
export const { toggleFavorito } = favoritosSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduto } from '../../interfaces/IProduto';

const initialState: IProduto[] = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<IProduto>) => {
      const produto = action.payload;

      if (state.find((produtoCarrinho) => produtoCarrinho.id === produto.id))
        alert('Item já adicionado!');
      else {
        state.push(produto);
      }
    }
  }
});

export default carrinhoSlice.reducer;
export const { adicionarAoCarrinho } = carrinhoSlice.actions;

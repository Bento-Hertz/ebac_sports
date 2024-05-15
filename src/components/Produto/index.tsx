import { useDispatch, useSelector } from 'react-redux';
import { IProduto } from '../../interfaces/IProduto';
import * as S from './styles';
import { adicionarAoCarrinho } from '../../store/reducers/carrinho';
import { toggleFavorito } from '../../store/reducers/favoritos';
import { RootReducer } from '../../store';

type Props = {
  produto: IProduto;
};

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  );

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch();

  const favoritos = useSelector((state: RootReducer) => state.favoritos);
  const estaNosFavoritos = favoritos.find(
    (favorito) => favorito.id === produto.id
  );

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(toggleFavorito(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
};

export default ProdutoComponent;

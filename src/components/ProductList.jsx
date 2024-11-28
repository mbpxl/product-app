import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../store/productSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      {products.length === 0 ? (
        <p>Продукты не найдены.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Цена: {product.price} руб.</p>
              <p>Статус: {product.available ? 'В наличии' : 'Нет в наличии'}</p>
              <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Переключить доступность
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

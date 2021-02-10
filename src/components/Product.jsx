import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Product = ({ product, handleAddToCart }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title} &nbsp;
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        {cart.find((item) => item.id === product.id)
          ? 'Añadido al carrito'
          : 'Comprar'}
      </button>
    </div>
  );
};

export default Product;

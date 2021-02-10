import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import { handleSum } from '../utils/HandlePriceTotal';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemoveFromCart = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos: </h3>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={handleRemoveFromCart(item)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        ) : (
          <h2>No existen elementos en el carrito</h2>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total : $ ${handleSum(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

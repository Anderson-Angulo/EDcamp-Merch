import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSum } from '../utils/HandlePriceTotal';
import { useHistory } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const history = useHistory();
  const paypalOptions = {
    clientId:
      'ARm-tUOHe57g4Lq-gDbFCklzmYY_eX0VtnOW9w4feg7U3Zzy9d1CziJWMButDoyJ-fp0_nn0b3_dPlaA',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      console.log('compra exitosa');
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((c) => (
          <div className="Payment-item" key={c.title}>
            <div className="Payment-element">
              <h4>{c.title}</h4>
              <span>{c.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSum(cart)}
            onButtonReady={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(data) => console.log(data)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from 'react';
import { useSelector } from 'react-redux';
import GetPaymentInformation from '../../components/GetPaymentInformation/GetPaymentInformation';
import Header from '../../components/Header/Header';
import { getCarrito } from '../../reducers/productsReducer';

const PaymentInformation = () => {
  const carrito = useSelector(getCarrito);
  const carritoTotalPurchase = carrito.reduce((acc, el) => acc + el.price, 0);
  return (
    <div>
      <Header />
      <h1>Payment information</h1>
      <GetPaymentInformation carritoTotalPurchase={carritoTotalPurchase} />
    </div>
  );
};

export default PaymentInformation;

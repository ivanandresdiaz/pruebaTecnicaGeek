import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreCarrito } from '../../actions/productsActions';
import { getCarrito } from '../../reducers/productsReducer';
import { DivRowCarrito } from './styledCarrito';
import Header from '../../components/Header/Header';

const Carrito = () => {
  const dispatch = useDispatch();
  const carrito = useSelector(getCarrito);
  useEffect(() => {
    if (!(carrito.length > 0)) {
      dispatch(getFirestoreCarrito());
    }
  }, []);
  console.log(carrito);
  return (
    <div>
      <Header />
      <h1>Carrito</h1>
      <DivRowCarrito>
        <p>Producto</p>
        <p>cantidad</p>
        <p>Precio</p>
      </DivRowCarrito>
      {carrito.length > 0 && carrito.map((product) => (
        <DivRowCarrito key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
        </DivRowCarrito>
      ))}
      <p>
        total:
        {carrito.reduce((acc, el) => acc + el.price, 0)}
      </p>
      <Link to='/paymentInformation'>
        Pagar
      </Link>
    </div>
  );
};

export default Carrito;

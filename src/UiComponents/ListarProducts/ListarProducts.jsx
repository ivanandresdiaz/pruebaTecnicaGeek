import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCarrito, getProducts } from '../../reducers/productsReducer';
import { addFirestoreCarrito, getFirestoreProducts } from '../../actions/productsActions';
import { ImgProduct, DivProductsGrid } from './styledListarProductos';
import Card from '../../components/Card/Card';

const ListarProducts = (props) => {
  const { gender } = props;
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const products = useSelector(getProducts);
  const carrito = useSelector(getCarrito);
  const carritoIds = carrito.map((item) => item.id);
  useEffect(() => {
    dispatch(getFirestoreProducts(gender));
  }, []);
  const handleAñadirCarrito = (product, isAddedCarrito) => {
    if (!(isAddedCarrito)) {
      dispatch(addFirestoreCarrito(product));
    }
  };
  return (
    <DivProductsGrid>
      {products.length > 0 && products.map((product) => {
        if (carritoIds.includes(product.id)) {
          return (<Card key={product.id} handleAñadirCarrito={handleAñadirCarrito} product={product} isAddedCarrito={true} />);
        }
        return (<Card key={product.id} handleAñadirCarrito={handleAñadirCarrito} product={product} isAddedCarrito={false} />);
      })}

    </DivProductsGrid>
  );
};

export default ListarProducts;

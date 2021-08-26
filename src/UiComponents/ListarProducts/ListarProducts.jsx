import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../reducers/productsReducer';
import { getFirestoreProducts } from '../../actions/productsActions';

const ListarProducts = (props) => {
  const { gender } = props;
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  useEffect(() => {
    dispatch(getFirestoreProducts(gender));
  }, []);
  console.log(products);
  return (
    <div>
      {products.length > 0 && products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ListarProducts;

import React from 'react';
import AddNewProduct from '../../components/AddNewProduct/AddNewProduct';
import ListarProducts from '../../UiComponents/ListarProducts/ListarProducts';

const ProductsByCategory = (props) => {
  const { match: { params: { gender } } } = props;
  return (
    <div>
      <h1>Productos by category</h1>
      <AddNewProduct gender={gender} />
      <h4>Productos</h4>
      <ListarProducts gender={gender} />

    </div>
  );
};

export default ProductsByCategory;

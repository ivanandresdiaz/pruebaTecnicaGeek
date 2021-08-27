import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  const { product, handleAñadirCarrito, isAddedCarrito } = props;

  return (
    <div>
      <div className='container page-wrapper'>
        <div className='page-inner'>
          <div className='row'>
            <div className='el-wrapper'>
              <div className='box-up'>
                <img className='img' src={product.image} alt={product.title} />
                <div className='img-info'>
                  <div className='info-inner'>
                    <span className='p-name'>
                      {product.title}
                      {' '}
                    </span>
                    <span className='p-company'>Marca ROTTCO</span>
                  </div>
                  <div className='a-size'>
                    Tallas disponibles :
                    <span className='size'>S , M , L , XL</span>
                  </div>
                </div>
              </div>

              <div className='box-down'>
                <div className='h-bg'>
                  <div className='h-bg-inner' />
                </div>

                <button type='button' className='cart' onClick={() => handleAñadirCarrito(product, isAddedCarrito)}>
                  <span className='price'>
                    $
                    {product.price}
                  </span>
                  <span className='add-to-cart'>
                    <span className='txt'>Agregar al carrito</span>
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/productDetails/${product.id}`}>
        Ver detalles
      </Link>
      {/* <div key={product.id}>
        <h3>{product.title}</h3>

        <p></p>
        <button type='button'>Añadir a Carrito</button>
      </div> */}
    </div>
  );
};

export default Card;

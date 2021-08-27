import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcNoIdea } from 'react-icons/fc';
import { MdFavorite, MdHome, MdAddShoppingCart } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { singOutAuth } from '../../actions/authActions';

import { DivItemNav, HeaderNav, ImgPhotoURL, DivIconCarrito } from './styledHeader';
import { getFullname, getPhotoURL } from '../../reducers/authReducer';
import { getCarrito } from '../../reducers/productsReducer';
import { getFirestoreCarrito } from '../../actions/productsActions';

const Header = (props) => {
  const dispatch = useDispatch();
  const fullname = useSelector(getFullname);
  const photoURL = useSelector(getPhotoURL);
  const carrito = useSelector(getCarrito);
  useEffect(() => {
    if (!(carrito.length > 0)) {
      dispatch(getFirestoreCarrito());
    }
  }, []);
  const itemsCarrito = carrito.length;
  const handleCerrarSesion = () => {
    dispatch(singOutAuth());
  };
  return (
    <HeaderNav>
      <Link to='/'>
        <DivItemNav>
          <MdHome />
          Home
        </DivItemNav>
      </Link>
      <Link to='/tarjetas'>
        <DivItemNav>
          <ImgPhotoURL src={photoURL} alt='image de perfil' />
          <p>Mis tarjetas</p>
        </DivItemNav>
      </Link>
      <Link to='/carrito'>
        <DivItemNav>
          <DivIconCarrito>
            <MdAddShoppingCart />
            <div>
              <span>{itemsCarrito}</span>
            </div>

          </DivIconCarrito>

          Carrito
        </DivItemNav>
      </Link>
      <DivItemNav onClick={handleCerrarSesion}>
        <BiLogOut color='#7A7C8B' size='4rem' />
        <p>Cerrar  sesion</p>
      </DivItemNav>
    </HeaderNav>
  );
};

export default Header;

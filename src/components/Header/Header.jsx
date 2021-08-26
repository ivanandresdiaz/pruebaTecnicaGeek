import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcNoIdea } from 'react-icons/fc';
import { MdFavorite, MdHome, MdAddShoppingCart } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { singOutAuth } from '../../actions/authActions';

import { DivItemNav, HeaderNav, ImgPhotoURL } from './styledHeader';
import { getFullname, getPhotoURL } from '../../reducers/authReducer';

const Header = (props) => {
  const fullname = useSelector(getFullname);
  const photoURL = useSelector(getPhotoURL);
  const dispatch = useDispatch();
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
      <Link to='/'>
        <DivItemNav>
          <ImgPhotoURL src={photoURL} alt='image de perfil' />
          {fullname && fullname}

        </DivItemNav>
      </Link>
      <Link to='/carrito'>
        <DivItemNav>
          <div>
            <MdAddShoppingCart />
            <span>1</span>
          </div>

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

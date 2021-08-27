import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreCards } from '../../actions/productsActions';
import Header from '../../components/Header/Header';
import { getTarjetas } from '../../reducers/productsReducer';
import { DivBody } from '../Home/styledHome';

const MisTarjetas = () => {
  const dispatch = useDispatch();
  const tarjetas = useSelector(getTarjetas);
  useEffect(() => {
    if (!(tarjetas.length > 0)) {
      dispatch(getFirestoreCards());
    }
  }, []);
  console.log(tarjetas);
  return (
    <div>
      <Header />
      <DivBody>
        <h1>Mis tarjetas</h1>
        <div>
          {tarjetas.length > 0 && tarjetas.map((item) => (
            <div key={item.id}>
              <p>Nombre del usuario</p>
              <p>{item.name}</p>
              <p>Numero de tarjeta</p>
              <p>{item.number}</p>
            </div>
          ))}
        </div>
      </DivBody>
    </div>
  );
};

export default MisTarjetas;

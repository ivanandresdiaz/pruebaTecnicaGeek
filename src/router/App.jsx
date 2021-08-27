/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/authActions';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Home from '../containers/Home/Home';
import ProductsByCategory from '../containers/ProductsByCategory/ProductsByCategory';
import Carrito from '../containers/Carrito/Carrito';
import ProductDetails from '../containers/ProductDetails/ProductDetails';
import PaymentInformation from '../containers/PaymentInformation/PaymentInformation';
import MisTarjetas from '../containers/MisTarjetas/MisTarjetas';

const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            dispatch(login(user.uid, user.displayName, 'admin'));
          }
          if (idTokenResult.claims.teacher) {
            dispatch(login(user.uid, user.displayName, 'teacher'));
          }
          if (idTokenResult.claims.student) {
            dispatch(login(user.uid, user.displayName, 'student'));
          }
        });

        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);

      }
    });
  }, [setIsLoggedIn, dispatch]);

  return (

    <HashRouter>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/'
            component={Home}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/category/:gender'
            component={ProductsByCategory}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/carrito'
            component={Carrito}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/productDetails/:idProduct'
            component={ProductDetails}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/paymentInformation'
            component={PaymentInformation}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/tarjetas'
            component={MisTarjetas}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to='/auth/landingPage' />
        </Switch>
      </div>
    </HashRouter>
  );
};
export default App;


/* eslint-disable import/prefer-default-export */
import toast from 'react-hot-toast';
import { firebase, db, googleAuthProvider, facebookAuthProvider } from '../firebase/firebaseConfig';

export const addFirestoreProduct = (product) => async (dispatch, getState) => {
  try {
    const priceNumber = parseInt(product.price);
    const newProduct = { ...product, price: priceNumber };
    await db.collection('productos').add(newProduct);
    toast.success('Se ha añadido con exito el producto');
    dispatch({ type: 'addFirestoreProduct', payload: { ...newProduct, id: product.title } });
  } catch (error) {
    console.log(error.message);
    toast.error('No se puede agregar, intente de nuevo.');
  }
};

export const getFirestoreProducts = (gender) => (dispatch) => {
  db.collection('productos')
    .where('gender', '==', gender)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      console.log(data);
      dispatch({ type: 'getFirestoreProducts', payload: data });
    })
    .catch((err) => {
      console.log(err);
      toast.error('Algo salio mal');
    });
};
export const addFirestoreCarrito = (product) => async (dispatch, getState) => {
  try {
    await db.collection('carrito').add(product);
    toast.success('Se ha añadido al carrito');
    dispatch({ type: 'addFirestoreCarrito', payload: product });
  } catch (error) {
    console.log(error.message);
    toast.error('No se puede agregar, intente de nuevo.');
  }
};
export const addFirestoreCard = (card) => async (dispatch, getState) => {
  try {
    await db.collection('card').add(card);
    toast.success('Se ha añadido al carrito');
  } catch (error) {
    console.log(error.message);
    toast.error('No se puede agregar, intente de nuevo.');
  }
};
export const getFirestoreCards = () => (dispatch) => {
  db.collection('card')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreCards', payload: data });
    })
    .catch((err) => {
      console.log(err);
      toast.error('Algo salio mal');
    });
};

export const getFirestoreCarrito = (gender) => (dispatch) => {
  db.collection('carrito')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreCarrito', payload: data });
    })
    .catch((err) => {
      console.log(err);
      toast.error('Algo salio mal');
    });
};

export const deleteFirestoreProductCarrito = (id) => async (dispatch) => {
  await db.collection('carrito').doc(id).delete();
  dispatch({ type: 'deleteFirestoreProductCarrito', payload: id });
};

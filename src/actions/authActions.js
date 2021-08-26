import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebaseConfig';

export const login = (uid, displayName, photoURL) => {
  if (photoURL.length > 0) {
    return {
      type: 'login',
      payload: {
        uid,
        displayName,
        photoURL,
      },
    };
  }
  return { type: 'login',
    payload: {
      uid,
      displayName,
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059',
    } };
};
export const logout = () => {
  return { type: 'logout' };
};

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };

};

export const loginGoogle = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      }).catch((err) => { console.log('error', err); });
  };
};
export const loginFacebook = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      }).catch((err) => { console.log('error', err); });
  };
};

export const singOutAuth = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch(logout());
};

export const registerWithEmailPassword = (email, password, name) => async (dispatch) => {
  try {
    const autenticando = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { user } = autenticando;
    await user.updateProfile({ displayName: name });
    dispatch(login(user.uid, user.displayName));
    alert('te has registrado con exito');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('este correo ya esta registrado, vuelve al login o solicita cambio de contraseña');
    }
    console.log('error con correo registro', error);
  }
};

/* eslint-disable import/prefer-default-export */

const initialState = {
  uid: '',
  displayName: '',
  photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export const getFullname = (state) => state.auth.displayName;
export const getPhotoURL = (state) => state.auth.photoURL;


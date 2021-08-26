import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../../firebase/firebaseConfig';
import useForm from '../../hooks/useForm';
import { addFirestoreProduct } from '../../actions/productsActions';

const addNewProduct = (props) => {
  const dispatch = useDispatch();
  const { gender } = props;
  const [formValues, handleInputChange, reset] = useForm({
    gender,
    title: '',
    price: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { title, price } = formValues;
  const handleUploadImageProduct = (event) => {
    const file = event.target.files[0];
    const refStorage = firebase.storage().ref(`products/${file.name}`);
    const task = refStorage.put(file);
    task.on(
      'state_changed',
      (snapshot) => {
        const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(`Error subiendo archivo = > ${err.message}`);
      },
      () => {
        task.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            const evento = {
              target: {
                value: url,
                name: 'image',
              },
            };
            handleInputChange(evento);
            setDisabled(false);
            // sessionStorage.setItem('imgNewPost', url);
          })
          .catch((err) => {
            console.log(`Error obteniendo downloadURL = > ${err}`);
          });
      },
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFirestoreProduct(formValues));
  };
  return (
    <div>
      <h1>Añadir nuevo producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titulo de la prenda
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          categoria
          <input
            type='text'
            name='gender'
            value={gender}
            disabled={true}
          />
        </label>
        <label>
          Precio
          <input
            type='number'
            name='price'
            value={price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          subir Foto (png|jpg)
          <input
            type='file'
            name='archivosubido'
            onChange={handleUploadImageProduct}
            accept='.jpg,.png'
            required
          />

        </label>
        <button type='submit' disabled={disabled}>
          Añadir producto a coleccion
        </button>
      </form>
    </div>
  );
};

export default addNewProduct;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { getProducts } from '../../reducers/productsReducer';

const ProductDetails = (props) => {
  const { match: { params: { idProduct } } } = props;
  const products = useSelector(getProducts);
  const product = products.find((product) => product.id === idProduct);
  console.log(product);
  return (
    <div>
      <Header />
      <h1>Product details</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>
        precion :
        {product.price}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam consequatur corrupti facilis, rem quaerat. Architecto, ratione quis vero iste provident minima ipsam assumenda repudiandae, sequi amet modi ut cumque!
        Velit facere omnis fugiat quis obcaecati laudantium maxime tenetur doloremque praesentium, ex, reprehenderit, dicta quidem et perspiciatis itaque ipsa laboriosam ipsam sapiente id ut blanditiis! Harum, saepe? Tenetur, dicta ducimus.
        Repellat aliquam a consequuntur eligendi nesciunt dolor distinctio quae explicabo error possimus soluta repellendus commodi sint, velit nam eos enim incidunt dolorum. Molestiae eaque perspiciatis similique mollitia nihil placeat consequatur?
        Veniam odio inventore sint pariatur, velit, earum voluptate provident voluptates eius corporis maiores eveniet, rem quis quas dolorem nihil reiciendis laudantium assumenda molestias. Modi deleniti delectus eveniet dicta quo corrupti.
        Numquam, facilis deleniti? Cum doloribus, laborum vitae earum corporis vero, nam eligendi aut quae in modi? Laborum error, quod tempora quisquam, maxime fuga quae, aliquid facilis incidunt repellat nihil doloribus!
        Corrupti facilis molestiae quam rerum porro, officia omnis, suscipit totam soluta dolore laboriosam cupiditate. Doloremque, facilis iste soluta totam labore delectus earum repudiandae. Reiciendis nemo dolore nostrum, rem maiores sint.
        Laboriosam veniam mollitia ipsam nihil dicta. Facilis quis tempora dolorum expedita magnam numquam omnis, quisquam ut, perspiciatis maxime cumque id amet doloremque exercitationem neque repudiandae impedit ipsa, asperiores temporibus. Suscipit!
        Dignissimos sed quisquam vero voluptatem doloribus non, esse et facilis dolorem ullam dolorum quia nobis voluptas, vel aliquid eveniet nostrum porro magni, odio dicta quibusdam provident id delectus accusantium? Eveniet?
        Quam cumque quaerat blanditiis aperiam nisi consequatur, optio ducimus velit neque repellat error facere aut ab recusandae harum sed magni a mollitia aliquid alias nulla. Accusantium cupiditate dolor adipisci tenetur.
        Sapiente fugit tempora nulla impedit quod earum dolores, molestias esse debitis nisi, magnam corporis molestiae modi in id deleniti voluptatibus incidunt? Architecto repellendus omnis placeat. Quo similique velit soluta maiores!
      </p>

    </div>
  );
};

export default ProductDetails;

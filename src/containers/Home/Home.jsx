import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { DivBody, ImgHeroHome, DivContainerHero, DivGroupCategories, DivCategory } from './styledHome';

const Home = (props) => {
  return (
    <div>
      <Header />
      <DivBody>
        <DivContainerHero>
          <ImgHeroHome src='https://firebasestorage.googleapis.com/v0/b/londonstore-fortul.appspot.com/o/beautiful-girl-with-black-hair-holding-decorated-denim-jacket.jpg?alt=media&token=b8204d2a-f7c7-40f5-af27-ece16595b0bc' alt='Hero' />
          <DivGroupCategories>
            <Link to='/category/hombre'>
              <DivCategory>
                <img src='https://firebasestorage.googleapis.com/v0/b/londonstore-fortul.appspot.com/o/young-handsome-man-choosing-shoes-at-shop.jpg?alt=media&token=60693cac-4527-45c7-a2f2-1fdd2d48258e' alt='CategoryMen' />
                <p>Hombre</p>
              </DivCategory>
            </Link>
            <Link to='/category/mujer'>
              <DivCategory>
                <img src='https://firebasestorage.googleapis.com/v0/b/londonstore-fortul.appspot.com/o/studio-shot-of-pretty-black-woman-with-white-shopping-bag-standing-over-yellow-background-trendy-spring-fashionable-look.jpg?alt=media&token=c701d36a-04de-43f8-ba2a-259ac65ea4d0' alt='categoryWomen' />
                <p>Mujer</p>
              </DivCategory>
            </Link>
          </DivGroupCategories>
        </DivContainerHero>
        <h1>Home</h1>
        <p>lorem Ipsum</p>
      </DivBody>

    </div>
  );
};

export default Home;

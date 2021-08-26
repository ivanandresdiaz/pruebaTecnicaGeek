import styled from 'styled-components';

export const DivBody = styled.div`
margin-top:60px;
`;
export const ImgHeroHome = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
object-position: top;
margin: 0;
`;
export const DivContainerHero = styled.div`
position: relative;
`;
export const DivGroupCategories = styled.div`
display: grid;
grid-template-rows: 50% 50%;
position: absolute;
top: 0px;
right: 0px;
width: 40vw;
height: 100%;
`;
export const DivCategory = styled.div`
height:100%;
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
cursor: pointer;
p{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size:50px;
}
img{
  filter: brightness(50%) grayscale(100%);
  width: 90%;
  height: 90%;
  :hover{
    filter: brightness(102%) grayscale(0%) ;
  }
}
`;

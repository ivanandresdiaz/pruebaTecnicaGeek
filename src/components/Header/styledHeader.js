import styled from 'styled-components';

export const DivContainerHeader = styled.div`
display: flex;
justify-content:space-around;
width:100%;
height:60px;
color: blue;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderNav = styled.header`
display: flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 70px;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
background-color:#FFFFFF;

a{ 
  color:#A78BFA;
  text-decoration:none;
  font-size:2.5rem
}
a:hover{
  color:black;
}
`;
export const DivItemNav = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 70px;
 p{ 
  color:#A78BFA;
  text-decoration:none;
  font-size:2.5rem
}
p:hover{
  color:black;
}
`;
export const ImgPhotoURL = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
margin: 0 20px;
`;
export const DivIconCarrito = styled.div`
position: relative;
div{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  background-color:red;
  color: white;
  border-radius: 50%;
  span{
    font-size: 10px;
  }
}
`;

import styled from "styled-components"
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from '@material-ui/icons';


const Info = styled.div`
width: 100%;
height: 100%;
top:0;
left:0;
position: absolute;
background-color: rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
display:flex;
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
align-items: center;
justify-content: center;
position: relative;
  background-color: #f5fbfd;
&:hover ${Info}{
  opacity: 1;

}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #fff;
position: absolute;
`;
const Image = styled.img`
height:75% ;
z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;

&:hover{
  background-color: #e9f5f5;
  transition: scale(1.10);
}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
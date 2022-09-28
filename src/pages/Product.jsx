import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import styled from "styled-components"
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
flex: 1
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
font-weight: 200;
margin-top:0px
`;

const Desc = styled.p`
margin: 20px 0px;
font-size: 30px;
font-weight: 100;
letter-spacing: 6px;
line-height: 70px;
  ${mobile({ letterSpacing: "0px", fontSize: "20px", lineHeight: "30px" })}
`;

const Price = styled.span`
font-size: 40px;
font-weight: 100;
`;

const FilterContainer = styled.div`
width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 10px;
font-size: 18px
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/LSJFR6L/9.png' />

        </ImgContainer>
        <InfoContainer>
          <Title>БРАСЛЕТ</Title>
          <Desc>БРАСЛЕТ НА РЕЗИНКЕ ИЗ БИРЮЗЫ И ЖЕМЧУГА С СЕРЕБРЯНОЙ ПОДВЕСКОЙ</Desc>
          <Price>3000₽</Price>
          <FilterContainer>
            <Filter>
              <FilterColor color='black' />
              <FilterColor color='red' />
              <FilterColor color='green' />
            </Filter>
            <Filter>
              <FilterSize>
                <FilterSizeOption>18 cm</FilterSizeOption>
                <FilterSizeOption>24 cm</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
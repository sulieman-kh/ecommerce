import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

// const Title = styled.h1`
//   font-weight: 300;
//   text-align: center;
// `;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin:5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {/* <Title>YOUR BAG</Title> */}
        <Top>
          <TopButton>ПРОДОЛЖИТЬ ПОКУПКИ</TopButton>
          <TopTexts>
            <TopText>ВАША КОРЗИНА(2)</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <TopButton type="filled">ОФОРМИТЬ ЗАКАЗ</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/SwZRXsR/10.png" />
                <Details>
                  <ProductName>
                    <b>ТОВАР: </b>
                    ЧОКЕР ИЗ ТРУБОЧЕК ЯШМЫ, С ПЕРЛАМУТРОМ И ПОДВЕСКАМИ
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 54
                  </ProductId>
                  <ProductColor color="#bdae77" />
                  <ProductSize>
                    <b>ДЛИНА:</b> 26cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>3500₽</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/pbW7PBx/13.png" />
                <Details>
                  <ProductName>
                    <b>ТОВАР: </b>
                    ЧОКЕР ИЗ ЧЁРНОГО ЖЕМЧУГА С ХРУСТАЛЬНЫМИ ТРУБОЧКАМИ
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 54
                  </ProductId>
                  <ProductColor color="#000" />
                  <ProductSize>
                    <b>ДЛИНА:</b> 26cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>4000₽</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ИТОГ ЗАКАЗА</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>ИТОГО</SummaryItemText>
              <SummaryItemPrice>7500₽</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>ДОСТАВКА</SummaryItemText>
              <SummaryItemPrice>300₽</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>СКИДКА</SummaryItemText>
              <SummaryItemPrice>-300₽</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Всего</SummaryItemText>
              <SummaryItemPrice>7500₽</SummaryItemPrice>
            </SummaryItem>
            <Button>ОФОРМИТЬ ЗАКАЗ</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
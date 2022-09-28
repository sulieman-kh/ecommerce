import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import styled from "styled-components"
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FiltreContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px; 
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })} 
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  `;
const Option = styled.option``;


const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>БРАСЛЕТЫ</Title>
      <FiltreContainer>
        <Filter>
          <Select>
            <Option disabled selected>ЦВЕТ</Option>
            <Option>КРАСНЫЙ</Option>
            <Option>СЕРЫЙ</Option>
            <Option>ЧЕРНЫЙ</Option>
            <Option>РАЗНОЦВЕТНЫЙ</Option>
          </Select>
          <Select>
            <Option disabled selected>
              РАЗМЕР
            </Option>
            <Option>ДЛИННЫЙ</Option>
            <Option>КОРОТКИЙ</Option>
          </Select>
        </Filter>
        <Filter>

          <Select>
            <Option selected>НОВЫЙ</Option>
            <Option>Сначала дешевле</Option>
            <Option>Сначала дороже</Option>
          </Select>
        </Filter>
      </FiltreContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList
import styled from "styled-components"
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile, tab } from "../responsive";

const Container = styled.div`
display : flex;
padding: 20px;
justify-center: space-between;
${mobile({ padding: "0px", flexDirection: "column" })};
${tab({ padding: "10px" })};
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item =>
        <CategoryItem item={item} key={item.id} />
      )}
    </Container>
  )
}

export default Categories
import React from 'react'
import styled from 'styled-components';
import { LocalMallOutlined, Search } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile, tab } from '../responsive';


const Container = styled.div`
  height: 60px;
  ${mobile({
  height: "50",
})};

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "5px 10px" })};
${tab({ padding: "2px 15px", })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
  ${tab({
  fontSize: "12px"
})}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ padding: "0px", marginLeft: "0px" })};

`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px", fontSize: "10px" })}
  ${tab({ width: "50px", fontSize: "12px" })}

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "14px" })};
  ${tab({ fontSize: "15px", })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
  ${tab({ marginRight: "10px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  ${'' /* ${tab({ fontSize: "12px", marginLeft: "15px" })} */}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="ИСКАТЬ" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Oasis Jewelry Shop.
          </Logo>
        </Center>
        <Right>
          <MenuItem>РЕГИСТРАЦИЯ</MenuItem>
          <MenuItem>ВОЙТИ</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <LocalMallOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar
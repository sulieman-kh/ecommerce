import { Instagram, MailOutline, Phone, Pinterest, Room, Telegram } from "@material-ui/icons";
import styled from "styled-components"
import { Icon24LogoVk } from '@vkontakte/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOdnoklassniki } from '@fortawesome/free-brands-svg-icons'
import { mobile, tab, ipad } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })};
${tab({ flexDirection: "column" })};
${ipad({ flexDirection: "row" })};
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

// const Flag = styled.div`
// width: 30px;
// `;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
margin-top: 25px;
color: white;
background-color: #${(props) => props.color};
cursor: pointer;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin:0;
padding:0;
display: flex;
flex-wrap: wrap;
list-style: none;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`;

const Right = styled.div`
flex: 1;
padding: 20px;

`;

const ContactItem = styled.div`
margin-bottom: 20px;
margin-left: 25px;
display: flex;
align-items: center;
cursor: pointer;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Oasis Jewelry Shop.</Logo>
        <Desc>Авторские украшения ручной работы из натуральных камней, Доставка по всей России.</Desc>
        {/* <Flag><RU title="Russia Flag" /></Flag> */}
        <SocialContainer>
          <SocialIcon color="C13584">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="405DE6">
            <Icon24LogoVk />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>

          <SocialIcon color="F77737">
            <FontAwesomeIcon icon={faOdnoklassniki}></FontAwesomeIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>ССЫЛКИ</Title>
        <List>
          <ListItem>ГЛАВНЯ</ListItem>
          <ListItem>КОРЗИНА</ListItem>
          <ListItem>МОЙ АККАУНТ</ListItem>
          <ListItem>ОТСЛЕЖИВАНИЕ ЗАКАЗА</ListItem>
        </List>
      </Center>

      <Right>
        <Title>КОНТАКТ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />Россия, Санкт-Петербург
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />8 (000) 000 00 00
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />oasis@mail.ru
        </ContactItem>
        <Payment src="https://i.ibb.co/mvwG7Gh/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
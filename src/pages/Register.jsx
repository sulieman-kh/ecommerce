import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div` 
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/23NnGtF/login.png")
      center;
background-size:cover;
display:flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
opacity: 0.8;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;


const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #9bc1bc;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>СОЗДАТЬ АККАУНТ?</Title>
        <Form>
          <Input placeholder="ИМЯ" />
          <Input placeholder="ФАМИЛИЯ" />
          <Input placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ" />
          <Input placeholder="ВАШ EMAIL" />
          <Input placeholder="ПАРОЛЬ" />
          <Input placeholder="ПОДТВЕРДИТЬ ПАРОЛЬ" />
          <Agreement>
            СОЗДАВАЯ АККАУНТ, Я ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ МОИХ ПЕРСОНАЛЬНЫХ ДАННЫХ В СООТВЕТСТВИИ С <b>ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</b>
          </Agreement>
          <Button>СОЗДАТЬ</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
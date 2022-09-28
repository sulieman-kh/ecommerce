import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { ipad, mobile, tab } from "../responsive";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
${'' /* background-color: #5555; */}
overflow: hidden;
${mobile({ display: "none" })};
${tab({ height: '45vh' })};
${ipad({ height: '60vh' })};
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #a4b0f5;
display: flex;
border-radius: 50%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
right: ${props => props.direction === 'right' && '10px'};
left: ${props => props.direction === 'left' && '10px'};
margin: auto;
cursor:pointer;
opacity: 0.5;
z-index: 2;
${tab({
  width: "30px",
  height: "30px",
})}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);

`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
${tab({
  height: "45vh"
})};
${ipad({
  height: "75vh"
})};
`;
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;
const Image = styled.img`
height: 80%;
width:80%;
${tab({
  width: "90%",
})};
${ipad({
  width: "90%",
})}
`;
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
${tab({
  padding: '5px',
})};
${ipad({
  padding: '0px',
})};
`;
const Title = styled.h1`
font-size: 65px;
${tab({
  fontSize: "30px",
})}

`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
${tab({
  fontSize: "12px",
})}
`;
const Button = styled.button`
padding: 10px;
background-color: transparent;
cursor: pointer;
${tab({
  fontSize: "10px"
})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    };
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>ЛЕТНЯЯ РАСПРОДАЖА</Title>
              <Desc>{item.desc}</Desc>
              <Button>ПОКАЗАТЬ СЕЙЧАС</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  )
}

export default Slider
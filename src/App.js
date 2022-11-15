import "./App.css";
import styled from "styled-components";
import imgFood from "./Image_food.jpg";

const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 50vh;
  background-color: #df367c;
  border-radius: 1.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Image = styled.img`
  background-repeat: no-repeat;

  object-fit: cover;
  background-position: 50% 50%;
  border-radius: 1.5rem;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: white;
  padding: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1em;
  text-align: left;
  color: white;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  width: 80%;
  background: white;
  color: black;
  border: 2px solid white;
`;

function App() {
  return (
    <CardHolder>
      <Card>
        <Image src={imgFood} alt=""></Image>
        <Title>Title goes here</Title>
        <Paragraph>Short description about the card.</Paragraph>
        <Button>Action</Button>
      </Card>
    </CardHolder>
  );
}

export default App;

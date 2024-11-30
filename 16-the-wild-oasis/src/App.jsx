import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <Button variation="primary" size="medium">Check in</Button>
        </Row>
        <Input type="number" placeholder="Number of guests" />
        <Heading as="h2">The Wild Oasis</Heading>
      </StyledApp>
    </>
  );
}

export default App;

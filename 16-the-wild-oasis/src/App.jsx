import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button>Check in</Button>
        <Input type="number" placeholder="Number of guests" />
        <Heading as="h2">The Wild Oasis</Heading>
      </StyledApp>
    </>
  );
}

export default App;

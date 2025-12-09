import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { BtnContainer, Container } from "./styles";

function Homework_08() {
  return (
    <Container>
      <Input name={"Name"} label={"Name"}/>

      <BtnContainer>
        <Button name={"Send"} />
      </BtnContainer>

      <Input id="simple_input" name={"Name"} label={"Name"}/>

      <BtnContainer>
        <Button name={"Send"} />
      </BtnContainer>

    </Container>
  );
}
export default Homework_08;

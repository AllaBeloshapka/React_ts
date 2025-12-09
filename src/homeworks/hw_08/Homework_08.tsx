import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { Container } from "./styles";


export default function Homework_08() {
  return (
    <Container>
      <Input name={"Name"} label={"Name"} disabled={true}/>
      <Button name={"Send"}/>
      <Input name={"Name"} label={"Name"} disabled={false}/>
      <Button name={"Send"}/>
    </Container>
  )
}

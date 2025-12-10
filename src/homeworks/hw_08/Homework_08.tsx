import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, Paragraph, FormElementContainer } from "./styles";

function Homework_08() {
  const works = () => {
    console.log("Button works");
  };

  return (
    <PageWrapper>
      <Paragraph>HW8</Paragraph>
      <FormElementContainer>
        <Button name="Simple button" onClick={works} />
      </FormElementContainer>
      <FormElementContainer>
        <Button name="Delete button" isRed onClick={works} />
      </FormElementContainer>
      <FormElementContainer>
        <Button name="Disabled button" isDisabled={true} onClick={works} />
      </FormElementContainer>
      <FormElementContainer>
        <Input
          id="simple_input"
          label="Simple Input"
          name="simple"
          placeholder="Enter message"
        />
      </FormElementContainer>
      <FormElementContainer>
        <Input
          id="error_input"
          label="Error Input"
          name="error"
          placeholder="Enter message"
          error="This field is required"
        />
      </FormElementContainer>
      <FormElementContainer>
        <Input
          id="disabled_input"
          label="Disabled Input"
          name="disabled"
          placeholder="Enter message"
          disabled
        />
      </FormElementContainer>
    </PageWrapper>
  );
}

export default Homework_08;


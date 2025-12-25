import Button from "components/Button/Button";

import { ButtonControl, PageWrapper, Paragraph } from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson_08</Paragraph>

      <ButtonControl>
        <Button name="Go back" type={undefined} />
      </ButtonControl>

      <ButtonControl>
        {/* <Button isRed={true} name="Delete" /> */}
        <Button isRed name="Delete" type={undefined} />
      </ButtonControl>

           <ButtonControl>
        <Button isDisabled name="Go back" type={undefined} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Lesson_08;

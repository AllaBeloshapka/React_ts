import Button from "components/Button/Button";

import { ButtonControl, PageWrapper, Paragraph } from "./styles";

 function Lesson_08() {
  return (
    <PageWrapper>

      <Paragraph>Lesson_08</Paragraph>

      <ButtonControl><Button $isDisabled name="Go button"/></ButtonControl>

      <ButtonControl><Button isRed name="Delete"/></ButtonControl>

    </PageWrapper>
     
      
    
  )
}

export default Lesson_08;
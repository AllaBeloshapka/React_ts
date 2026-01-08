import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { ButtonControl, Description, PageWrapper } from "./styles";
import type { CildrenTemplateProps } from "./types";


export default function ClientTemplate({children}: CildrenTemplateProps) {
    const navigate = useNavigate();

const goback = () => {
    navigate(-1);
}

  return (
    <PageWrapper>
        <Description> {children} </Description>
        <ButtonControl>
            <Button name="Go back" onClick={goback}/>
        </ButtonControl>
      
    </PageWrapper>
  )
}

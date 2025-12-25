import Button from "components/Button/Button";


import { PageWrapper, ButtonControl } from "./styles";
import { useNavigate } from "react-router-dom";

function About() {
const navigate = useNavigate();

    const goToHomePage = () => {
    navigate("/");
  };

const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>

      Information about company
      
      <ButtonControl onClick={goBack}>
        <Button name="Go back" />
      </ButtonControl>

      <ButtonControl onClick={goToHomePage}>
        <Button name="Go to Home page" />
      </ButtonControl>

    </PageWrapper>
  );
}

export default About;

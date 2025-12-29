import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {
  ButtonLinkedin,
  InfoBoxLinkedin,
  LinkedinWraper,
  TextLinkedin,
} from "./styles";

function Linkedin() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <LinkedinWraper>
      <InfoBoxLinkedin>
        <img src="https://www.flutlicht.biz/wp-content/uploads/2013/09/linkedIn-fuer-unternehmen-nutzen-Logo.png" />
        <TextLinkedin>
          LinkedIn — это профессиональная социальная сеть для делового общения.
          Она объединяет специалистов, компании и работодателей со всего мира.
          LinkedIn используется для поиска работы, развития карьеры,
          установления профессиональных контактов и обмена деловым опытом.
        </TextLinkedin>
      </InfoBoxLinkedin>

      <ButtonLinkedin onClick={goBack}>
        <Button name="Go back" />
      </ButtonLinkedin>
    </LinkedinWraper>
  );
}

export default Linkedin;

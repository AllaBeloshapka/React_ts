import "./styles";

import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import { ButtonFacebook, FacebookWraper, InfoBoxFacebook, Text } from "./styles";

function Facebook() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <FacebookWraper>
      <InfoBoxFacebook>
        <img src="https://www.designenlassen.de/blog/wp-content/uploads/2024/02/Facebook-Logo-2019-768x432-2.png" />
        <Text>
          Facebook — это социальная сеть, которая объединяет людей со всего
          мира. Она позволяет общаться, делиться мыслями, фотографиями и
          новостями, а также находить друзей, единомышленников и сообщества по
          интересам. Facebook используется для общения, обучения, обмена
          информацией и продвижения идей, проектов или бизнеса. Это
          пространство, где люди остаются на связи и чувствуют себя частью
          большого мира.
        </Text>
      </InfoBoxFacebook>

      <ButtonFacebook onClick={goBack}>
        <Button name="Go back" />
      </ButtonFacebook>
    </FacebookWraper>
  );
}

export default Facebook;

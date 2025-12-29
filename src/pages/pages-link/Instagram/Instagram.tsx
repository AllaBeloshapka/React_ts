import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {
  ButtonInstagram,
  InfoBoxInstagram,
  InstagramWraper,
  TextInstagram,
} from "./styles";

function Instagram() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <InstagramWraper>
      <InfoBoxInstagram>
        <img src="https://www.pixartprinting.de/blog/wp-content/uploads/2023/07/Instagram_Cover.jpg" />
        <TextInstagram>
          Instagram — это социальная сеть, ориентированная на визуальный
          контент. Она позволяет делиться фотографиями, видео и короткими
          историями, передавая эмоции, идеи и моменты жизни. Instagram
          используется для самовыражения, вдохновения, общения и продвижения
          личного бренда, творчества или бизнеса.
        </TextInstagram>
      </InfoBoxInstagram>

      <ButtonInstagram onClick={goBack}>
        <Button name="Go back" />
      </ButtonInstagram>
    </InstagramWraper>
  );
}

export default Instagram;

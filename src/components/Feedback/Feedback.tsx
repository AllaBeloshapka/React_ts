import Button from "components/Button/Button";
import {ButtonWithcountContainer, Count, FeedbackControl, FeedbackWrapper} from './styles'


import { type FeedbackProps } from "./types";


function Feedback({
  like,
  dislike,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper >
      <FeedbackControl>
        <ButtonWithcountContainer >
          <Button name="Like" onClick={onLike} />
          <Count >{like}</Count>
        </ButtonWithcountContainer>
        <ButtonWithcountContainer >
          <Button name="Dislike" onClick={onDislike} />
          <Count >{dislike}</Count>
        </ButtonWithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;

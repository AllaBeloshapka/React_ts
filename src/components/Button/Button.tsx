
import {ButtonControl} from "./styles"
import { type ButtonProps } from "./type";

function Button({ name = "Send", type = "button", onClick, isRed=false, $isDisabled=false}: ButtonProps) {
  return (
    <ButtonControl $isRed={isRed} disabled={$isDisabled} type={type} onClick={onClick}>
      {name}
    </ButtonControl>
  );
}

export default Button;

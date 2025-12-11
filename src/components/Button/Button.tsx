import { type ButtonProps } from "./type";
import { ButtonComponent } from "./styles";

function Button({ name, type = "button", onClick, isRed = false, isDisabled = false  }: ButtonProps) {
  return (
    <ButtonComponent disabled={isDisabled}  $isRed={isRed} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;



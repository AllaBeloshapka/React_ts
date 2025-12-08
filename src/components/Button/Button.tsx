import { type ButtonProps } from "./type.ts";
import { ButtonComponent } from "./styles.ts";

function Button({ name = "Send", type = "button", onClick, isRed = false, isDisabled = false  }: ButtonProps) {
  return (
    <ButtonComponent disabled={isDisabled} $isRed={isRed} className="button_component" type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;


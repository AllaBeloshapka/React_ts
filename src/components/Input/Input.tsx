import { InputComponent, InputLabel, InputWrapper } from "./styles";
import { type InputProps } from "./type";

function Input({ id, name, type, placeholder, label, disabled, error }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />
    </InputWrapper>
  );
}

export default Input;

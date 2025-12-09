import { InputComponent, InputLabel, InputWrapper } from "./styles";
import { type InputProps } from "./type";

function Input({ id, name, type, placeholder, label, value, onChange}: InputProps) {
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
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;

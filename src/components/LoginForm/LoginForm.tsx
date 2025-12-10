import { type FormEvent, type ChangeEvent, useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LOGIN_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, Title } from "./styles";
function LoginForm() {
  // const [firstName, setFirstName] = useState<string>("");
  // const onChange = (event: any) => {
  //   setFirstName(event.target.value);
  // };

  //Шаг 1: Создаем состояния для email и password
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Шаг 2: Создаем обработчики изменений для email и password, ловли событий onChange
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //Шаг 3: Создаем функцию login для обработки отправки формы
  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    
  };

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          //Шаг 4: Привязываем состояния и обработчики к инпутам
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          //Шаг 4: Привязываем состояния и обработчики к инпутам
          value={password}
          onChange={onChangePassword}
        />
      </InputsContainer>

      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;

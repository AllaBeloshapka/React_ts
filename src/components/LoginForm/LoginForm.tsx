// ШАГ 1: Импортируем useFormik из библиотеки formik
import { useFormik } from "formik";

import * as Yup from "yup";

// import { type FormEvent, type ChangeEvent, useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LOGIN_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, Title } from "./styles";

// Ваплидация с помощью yup
const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .email("This filed should be in email format"),
  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(20, "Password field should contain max 20 characters"),
});

function LoginForm() {
  // контроль инпутов через useState
  // // ШАГ 1 Создаем стейты для контроля HTML элеметов Input
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // // ШАГ 2 создаем функции onChange для ловли события change, чтобы получить доступ к введенным данным полльзователя и обновить стейты
  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const login = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // ШАГ 2: Создаем обьект formik
  // useFormik возвращает обьект, в котором прописанны необходимые данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента обьект - он является обязательным
  // обьект который мы передаем useFormik нужен для настройки обьекта, который возвращает хук useFormik
  // обьект, который мы передаем useFomik имеет 2 обязательных ключа:
  // 1. initialValues - принимат в качестве значения обьект:
  // - в качестве ключа у нас выступает значение атрубута name в элементах формы
  // - в качестве значения ключа мы прописывает значение по умолчанию, которое должно быть в элеиенте формы
  // 2. onSubmit - это функция, которая вызывается на событие submit(при клике на кнопку с type="submit")
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    // values - это обьект, ключи которого явлются значение атприбута name у элементов формы, а значение ключа - это то что ввел пользователь в наших элементах формы
    onSubmit: (values, helpers) => {
      console.log("formik submit works!");
      console.log(values, helpers);
      // Вспомогательные функции, которые мы можем использовать во время события submit
      // например helpers.resetForm() -  очищает форму от значений(т.е делает занчения формы по умолчанию)
      helpers.resetForm();
    },
  });

  console.log(formik.errors[LOGIN_FORM_VALUES.EMAIL]);

  return (
    // formik.handleSubmit - мы прописывает для того, чтобы когда мы нажали на кнопку c type="submit",
    //  у нас вызвалась функция, которую мы прописали в onSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          // formik.values.email - мы прописываем, чтобы элемент формы получил 
          // значениe которое пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          // formik.handleChange - помогает контрлировать ввод пользователя данных с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;


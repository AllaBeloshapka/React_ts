//Импортируем контекст приложения
import { AppLayoutContext } from "../Layout";

import { Container, FormaWrapper } from "./styles";
//Импортируем хуки 
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { DATA } from "./types";

// Ваплидация формы с помощью Yup
const validationSchema = Yup.object().shape({
  [DATA.NAME]: Yup.string().required("Name field is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters"),
  [DATA.LAST_NAME]: Yup.string().required("Last name field is required")
    .max(15, "Maximum 15 characters"),
  [DATA.AGE]: Yup.string()
    .required("Age field is required")
    .min(1, "Minimum 1 character")
    .max(3, "Maximum 3 characters"),
  [DATA.JOB_POSITION]: Yup.string().required("Job position field is required")
   .max(30, "Maximum 30 characters"),
});

function Create_Employee() {
  //Получаем данные контекста приложения
const context = useContext(AppLayoutContext);
//Если контекст отсутствует, возвращаем undefined
if (!context) {
  return undefined;
}
//Извлекаем функцию установки данных сотрудника из контекста
const { setEmployee } = context;

  //Инициализируем formik для управления формой, изначальными значениями, 
  // валидацией и обработчиком отправки
  const formik = useFormik({
    initialValues: {
      [DATA.NAME]: "",
      [DATA.LAST_NAME]: "",
      [DATA.AGE]: "",
      [DATA.JOB_POSITION]: "",
    },
    // Подключаем схему валидации
    validationSchema: validationSchema,
    // Отключаем валидацию при изменении полей
    validateOnChange: false,

    // Обработчик отправки формы, функция кнопки submit
   onSubmit: (values, helpers) => {
    // Устанавливаем данные сотрудника в контекст приложения
  setEmployee({
    name: values[DATA.NAME],
    lastName: values[DATA.LAST_NAME],
    age: values[DATA.AGE],
    jobPosition: values[DATA.JOB_POSITION],
  });
   console.log("Employee created:");
      console.log(values);
// Сбрасываем форму после отправки
  helpers.resetForm();
},

  });
  return (
    <FormaWrapper onSubmit={formik.handleSubmit}>

        <Container>
          
          <Input
            id="name-id"
            name={DATA.NAME}
            placeholder="John"
            label="Name*"
            value={formik.values[DATA.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.NAME]}
          />
          <Input
            id="last-name-id"
            name={DATA.LAST_NAME}
            placeholder="Johnson"
            label="Surname*"
            value={formik.values[DATA.LAST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.LAST_NAME]}
          />
          <Input
            id="age-id"
            name={DATA.AGE}
            placeholder="25"
            label="Age*"
            value={formik.values[DATA.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.AGE]}
          />
          <Input
            id="job-id"
            name={DATA.JOB_POSITION}
            placeholder="QA"
            label="Job Position"
            value={formik.values[DATA.JOB_POSITION]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.JOB_POSITION]}
          />

          <Button name="Create" type="submit" />
        </Container>
    
    </FormaWrapper>
  );
}
export default Create_Employee;

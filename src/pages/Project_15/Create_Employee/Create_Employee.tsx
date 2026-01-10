import { AppLayoutContext } from "../Layout";
import { Container, FormaWrapper } from "./styles";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { DATA } from "./types";

// Ваплидация формы с помощью Yup
const validationSchema = Yup.object().shape({
  [DATA.NAME]: Yup.string().required("Name field is required"),
  [DATA.LAST_NAME]: Yup.string().required("Last name field is required"),
  [DATA.AGE]: Yup.number()
    .required("Age field is required")
    .positive("Age must be a positive number"),
  [DATA.JOB_POSITION]: Yup.string().required("Job position field is required"),
});

function Create_Employee() {
  //Получаем контекст приложения
const context = useContext(AppLayoutContext);

if (!context) {
  return null;
}

const { setEmployee } = context;

  //Инициализируем formik для управления формой
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

    // Обработчик отправки формы
   onSubmit: (values, helpers) => {
  setEmployee({
    name: values[DATA.NAME],
    lastName: values[DATA.LAST_NAME],
    age: values[DATA.AGE],
    jobPosition: values[DATA.JOB_POSITION],
  });

  helpers.resetForm();
},

  });
  return (
    <FormaWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Input
            id="name-id"
            name={DATA.NAME}
            placeholder="Enter your name"
            label="Name"
            value={formik.values[DATA.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.NAME]}
          />
          <Input
            id="last-name-id"
            name={DATA.LAST_NAME}
            placeholder="Enter your last name"
            label="Last Name"
            value={formik.values[DATA.LAST_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.LAST_NAME]}
          />
          <Input
            id="age-id"
            name={DATA.AGE}
            placeholder="Enter your age"
            label="Age"
            value={formik.values[DATA.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.AGE]}
          />
          <Input
            id="job-id"
            name={DATA.JOB_POSITION}
            placeholder="Enter your job position"
            label="Job Position"
            value={formik.values[DATA.JOB_POSITION]}
            onChange={formik.handleChange}
            error={formik.errors[DATA.JOB_POSITION]}
          />

          <Button name="Login" type="submit" />
        </Container>
      </form>
    </FormaWrapper>
  );
}
export default Create_Employee;

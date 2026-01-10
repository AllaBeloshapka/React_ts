import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { EMPLOYEE_FORM_VALUES  } from "./types";
import { FormContainer, InputsContainer, Title } from "./styles";

const validationSchema = Yup.object().shape({
  [EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
  .required("Name is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters"),
    
  [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
    .required("Surname is required")
    .max(15, "Maximum 15 characters"),

  [EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
    .required("Age is required")
    .min(1, "Minimum 1 character")
    .max(3, "Maximum 3 characters"),
    

  [EMPLOYEE_FORM_VALUES.JOB_POSITION]: Yup.string()
    .max(30, "Maximum 30 characters"), 
});

function Create_Employee() {
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES.JOB_POSITION]: ""
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log("Employee created:");
      console.log(values);

      helpers.resetForm();
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Create Employee</Title>

      <InputsContainer>
        <Input
          label="Name"
          name={EMPLOYEE_FORM_VALUES.NAME}
          placeholder="John"
          value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]} id={""}        />
        <Input
          label="Surname"
          name={EMPLOYEE_FORM_VALUES.SURNAME}
          placeholder="Johnson"
          value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]} id={""}        />
        <Input
          label="Age"
          name={EMPLOYEE_FORM_VALUES.AGE}
          placeholder="25"
          value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]} id={""}        />
        <Input
          label="Job Position"
          name={EMPLOYEE_FORM_VALUES.JOB_POSITION}
          placeholder="QA"
          value={formik.values[EMPLOYEE_FORM_VALUES.JOB_POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_VALUES.JOB_POSITION]} id={""}        />
      </InputsContainer>

      <Button name="Create" type="submit" />

    </FormContainer>
    
  );
}
export default Create_Employee;
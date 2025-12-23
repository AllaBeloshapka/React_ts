import { useFormik } from "formik";

import * as Yup from "yup";

import { Title, ContactUsFormContainer, InputContainer } from "./styles";

import { CONTACT_US_FORM_VALUES } from "./types";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

// Правила, по которым проверяем данные до того, как форма отправится.
const validationSchema = Yup.object().shape({
  [CONTACT_US_FORM_VALUES.FULL_NAME]: Yup.string()
    .required("Full name is required")
    .min(3, "Full name field should contain min 3 characters")
    .max(50, "Full name field should contain max 50 characters"),

  [CONTACT_US_FORM_VALUES.PHONE]: Yup.string()
    .required("Phone number is required")
    .min(4, "Phone field should contain min 4 characters")
    .max(20, "Phone field should contain max 20 characters"),

  [CONTACT_US_FORM_VALUES.EMAIL]: Yup.string()
    .email("This filed should be in email format")
    .min(6, "Email field should contain min 6 characters")
    .max(60, "Email field should contain max 60 characters"),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_US_FORM_VALUES.PHONE]: "",
      [CONTACT_US_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    // отключаем проверку, пока пользователь не нажмёт кнопку отправки формы
    validateOnChange: false, 
    // Когда форма успешно отправлена, получаем данные формы, может с ними что-то сделать
    // и очищает форму после отправки.
    onSubmit: (values, helpers) => {
      console.log("Содержание формы:", values, helpers);
    // Очистка формы после отправки
      helpers.resetForm();
    },
  });
  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact Us</Title>
      <InputContainer>
      <Input
        id="fullName-id"
        name={CONTACT_US_FORM_VALUES.FULL_NAME}
        type="string"
        placeholder="Your full name"
        label="Full name*"
        value={formik.values[CONTACT_US_FORM_VALUES.FULL_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_VALUES.FULL_NAME]}
      />

      <Input
        id="phone-id"
        name={CONTACT_US_FORM_VALUES.PHONE}
        type="string"
        placeholder="Your phone number"
        label="Phone number*"
        value={formik.values[CONTACT_US_FORM_VALUES.PHONE]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_VALUES.PHONE]}
      />

      <Input
        id="Email-id"
        name={CONTACT_US_FORM_VALUES.EMAIL}
        type="string"
        placeholder="Enter your email"
        label="Email"
        value={formik.values[CONTACT_US_FORM_VALUES.EMAIL]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_FORM_VALUES.EMAIL]}
      />

     </InputContainer>

      <Button name="SEND REQUEST" type="submit"></Button>
    </ContactUsFormContainer>
  );
}

export default ContactUs;

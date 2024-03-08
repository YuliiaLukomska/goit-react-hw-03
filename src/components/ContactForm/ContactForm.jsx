import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContacts }) => {
  const handleSubmit = (data, formActions) => {
    addContacts(data);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

import { Formik, Form, Field } from "formik";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="name" type="text" />
        <Field name="number" type="text" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

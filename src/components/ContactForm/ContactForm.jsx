import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

export const ContactForm = ({submit}) => {
  return (<div>
    <h1>Phonebook</h1>
    <Formik
      initialValues = {{
        name: '',
        tel: ''
      }}
      onSubmit={(values, actions) => {
        values.id = nanoid();
        actions.resetForm();
        submit(values);
      }}>
      <Form>
        <Field id="name" name="name" placeholder="Name*" required />
        <Field id="tel" name="tel" type="tel" placeholder="Your tel*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}

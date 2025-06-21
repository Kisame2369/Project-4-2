import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import type { FormikHelpers } from 'formik';


type FormValues = {
  topic: string;
};

const formValues:FormValues  = {
  topic: "",
};

type SearchBarProps = {
  onSearch: (topic: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header>
      <Formik
        initialValues={formValues}
        onSubmit={(values: FormValues, actions:FormikHelpers<FormValues>) => {
          if (!values.topic.trim()) {
            toast.error('Please enter a search term');
            return;
          }
          
          onSearch(values.topic.trim());
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
 
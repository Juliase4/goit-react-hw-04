import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const notify = () => {
  toast.error("Please enter a search term", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export default function SearchBar({ onSearch }) {
  return (
    <header className={styles.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            notify();
            return;
          }

          onSearch(values.query.trim());
          actions.resetForm();
        }}>
        <Form>
          <Field
            className={styles.input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name="query"
          />
          <button
            className={styles.btn}
            type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}

import styles from './Form.module.css';

function Form({ children, type, onSubmit }) {
  return (
    <form
      className={`${type === 'modal' ? styles.modalForm : styles.form}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;

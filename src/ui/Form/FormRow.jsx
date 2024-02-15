import styles from './Form.module.css';

function FormRow({ label, error, children }) {
  return (
    <div className={styles.formRowContainer}>
      {label && (
        <label className={styles.formLabel} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.formError}>{error}</span>}
    </div>
  );
}

export default FormRow;

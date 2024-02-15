import styles from './Error.module.css';

function ErrorBox({ children }) {
  return <div className={styles.boxError}>{children}</div>;
}

export default ErrorBox;

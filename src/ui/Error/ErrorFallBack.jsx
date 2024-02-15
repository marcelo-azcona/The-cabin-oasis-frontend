import styles from './Error.module.css';

function ErrorFallBack({ children }) {
  return <main className={styles.mainError}>{children}</main>;
}

export default ErrorFallBack;

import styles from './Login.module.css';

function Login({ children }) {
  return <main className={styles.login}>{children}</main>;
}

export default Login;

import styles from './Button.module.css';

function Button({ children, size = 'medium', variation = 'primary', onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variation]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

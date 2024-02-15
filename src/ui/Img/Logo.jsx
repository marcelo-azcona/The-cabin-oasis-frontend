import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src="/logo-light.png" alt="Logo" className={styles.logoImg} />
    </div>
  );
}

export default Logo;

import styles from './Menu.module.css';

function MenuButton({ children }) {
  return <button className={styles.menuButton}>{children}</button>;
}

export default MenuButton;

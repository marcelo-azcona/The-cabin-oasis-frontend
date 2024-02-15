import styles from './Menu.module.css';

function MenuToggle({ children }) {
  return <button className={styles.menuToggle}>{children}</button>;
}

export default MenuToggle;

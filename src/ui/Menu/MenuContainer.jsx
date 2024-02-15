import styles from './Menu.module.css';

function MenuContainer({ children }) {
  return <div className={styles.menuContainer}>{children}</div>;
}

export default MenuContainer;

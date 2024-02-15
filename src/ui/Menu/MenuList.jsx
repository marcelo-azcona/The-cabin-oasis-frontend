import styles from './Menu.module.css';

function MenuList({ children, positionX, positionY }) {
  return (
    <ul
      className={styles.menuList}
      style={{ right: `${positionX}px`, top: `${positionY}px` }}
    >
      {children}
    </ul>
  );
}

export default MenuList;

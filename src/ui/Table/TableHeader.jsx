import styles from './Table.module.css';

function TableHeader({ children, colums }) {
  return (
    <header
      className={styles.tableHeader}
      style={{ gridTemplateColumns: `${colums}` }}
    >
      {children}
    </header>
  );
}

export default TableHeader;

import styles from './Table.module.css';

function TableEmpty({ children }) {
  return <p className={styles.tableEmpty}>{children}</p>;
}

export default TableEmpty;

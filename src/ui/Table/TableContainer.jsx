import styles from './Table.module.css';

function TableContainer({ children }) {
  return <div className={styles.tableContainer}>{children}</div>;
}

export default TableContainer;

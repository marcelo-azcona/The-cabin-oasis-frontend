import styles from './Table.module.css';

function TableBody({ children }) {
  return <section className={styles.tableBody}>{children}</section>;
}

export default TableBody;

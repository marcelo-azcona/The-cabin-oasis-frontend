import styles from './Table.module.css';

function TableFooter({ children }) {
  return <footer className={styles.tableFooter}>{children}</footer>;
}

export default TableFooter;

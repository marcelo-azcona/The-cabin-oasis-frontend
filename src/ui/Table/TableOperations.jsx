import { Children } from 'react';
import styles from './Table.module.css';

function TableOperations({ children }) {
  return <div className={styles.tableOperation}>{children}</div>;
}

export default TableOperations;

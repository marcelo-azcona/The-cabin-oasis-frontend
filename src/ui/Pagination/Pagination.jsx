import styles from './Pagination.module.css';

function Pagination({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Pagination;

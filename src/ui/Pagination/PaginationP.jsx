import styles from './Pagination.module.css';

function PaginationP({ children }) {
  return <p className={styles.paragraph}>{children}</p>;
}

export default PaginationP;

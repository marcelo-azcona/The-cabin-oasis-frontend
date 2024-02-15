import styles from './FilterButton.module.css';

function Filter({ children, filterField, options }) {
  return <div className={styles.filterContainer}>{children}</div>;
}

export default Filter;

import styles from './Pagination.module.css';

function PaginationButton({ children, active }) {
  return (
    <button
      className={`${styles.paginationButton} ${
        active ?? styles.paginationButtonActive
      }`}
    >
      {children}
    </button>
  );
}

export default PaginationButton;

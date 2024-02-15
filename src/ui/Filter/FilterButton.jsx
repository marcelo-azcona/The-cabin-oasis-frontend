import styles from './FilterButton.module.css';

function FilterButton({ children, active }) {
  return (
    <div
      className={`${styles.filterButton} ${
        active ?? styles.filterButtonActive
      }`}
    >
      {children}
    </div>
  );
}

export default FilterButton;

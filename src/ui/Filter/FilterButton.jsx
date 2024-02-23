import styles from './Filter.module.css';

function FilterButton({ children, active, onClick }) {
  return (
    <div
      className={`${styles.filterButton} ${
        active && styles.filterButtonActive
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default FilterButton;

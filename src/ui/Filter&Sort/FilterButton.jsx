import styles from './Filter.module.css';

function FilterButton({ children, active, disabled, onClick }) {
  return (
    <div
      className={`${styles.filterButton} ${
        active && styles.filterButtonActive
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </div>
  );
}

export default FilterButton;

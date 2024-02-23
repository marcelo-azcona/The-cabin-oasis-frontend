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
      {console.log(active)}
    </div>
  );
}

export default FilterButton;

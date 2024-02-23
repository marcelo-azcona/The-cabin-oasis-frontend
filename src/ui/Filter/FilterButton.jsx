import styles from './Filter.module.css';

function FilterButton({ children, onClick }) {
  return (
    <div className={`${styles.filterButton}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default FilterButton;

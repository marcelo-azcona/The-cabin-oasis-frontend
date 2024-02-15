import styles from './Select.module.css';

function Select({ children, type }) {
  return (
    <select
      className={`${styles.select} ${
        type === 'white' ? styles.selectBorderWhite : styles.selectBorderDefault
      }`}
    >
      {children}
    </select>
  );
}

export default Select;

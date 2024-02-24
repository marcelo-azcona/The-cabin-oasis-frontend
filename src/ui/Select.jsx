import styles from './Select.module.css';

function Select({ options, value, type, onChange }) {
  return (
    <select
      className={`${styles.select} ${
        type === 'white' ? styles.selectBorderWhite : styles.selectBorderDefault
      }`}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

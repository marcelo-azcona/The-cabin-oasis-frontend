import styles from './Input.module.css';

function Input({
  type,
  id,
  disabled,
  name,
  register = '',
  validation,
  onChange,
  onBlur,
  defaultValue,
}) {
  if (register !== '') {
    return (
      <input
        className={styles.input}
        type={type}
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        defaultValue={defaultValue}
        {...register(name, validation)}
      />
    );
  } else {
    return (
      <input
        className={styles.input}
        type={type}
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    );
  }
}

export default Input;

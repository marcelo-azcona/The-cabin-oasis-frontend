import styles from './Textarea.module.css';

function Textarea({
  id,
  defaultValue,
  disabled,
  type,
  register,
  validation,
  name,
}) {
  return (
    <textarea
      className={styles.textarea}
      type={type}
      id={id}
      defaultValue={defaultValue}
      disabled={disabled}
      {...register(name, validation)}
    ></textarea>
  );
}

export default Textarea;

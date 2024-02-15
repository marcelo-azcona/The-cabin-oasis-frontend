import styles from './Row.module.css';

function Row({ children, type = 'vertical' }) {
  return (
    <div
      className={`${type === 'vertical' ? styles.vertical : styles.horizontal}`}
    >
      {children}
    </div>
  );
}

export default Row;

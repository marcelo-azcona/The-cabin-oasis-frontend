import styles from './Flag.module.css';

function Flag({ children, alt }) {
  return (
    <img alt={alt} className={styles.flag}>
      {children}
    </img>
  );
}

export default Flag;

import styles from './Button.module.css';

function ButtonGroup({ children }) {
  return <div className={styles.group}>{children}</div>;
}

export default ButtonGroup;

import styles from './Modal.module.css';

function ModalContainer({ children }) {
  return <div className={styles.menuContainer}>{children}</div>;
}

export default ModalContainer;

import styles from './Modal.module.css';

function ModalOverlay({ children }) {
  return <div className={styles.modalOverlay}>{children}</div>;
}

export default ModalOverlay;

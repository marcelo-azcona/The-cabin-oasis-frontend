import styles from './Modal.module.css';

function ModalButton({ children }) {
  return <button className={styles.modalButton}>{children}</button>;
}

export default ModalButton;

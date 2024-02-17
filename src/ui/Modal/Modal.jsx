import { HiXMark } from 'react-icons/hi2';
import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalParent}>
        <button className={styles.modalButton} onClick={onClose}>
          <HiXMark />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

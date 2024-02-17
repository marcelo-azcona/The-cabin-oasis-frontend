import { HiXMark } from 'react-icons/hi2';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalParent}>
        <button className={styles.modalButton} onClick={onClose}>
          <HiXMark />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;

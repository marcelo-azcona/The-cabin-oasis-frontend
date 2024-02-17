import { HiXMark } from 'react-icons/hi2';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  function close() {
    setOpenName('');
  }

  const open = setOpenName;

  return (
    <ModalContext.Provider value={(openName, close, open)}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener('click', handleClick);

      return () => document.removeEventListener('click', handleClick, true);
    },
    [close]
  );

  if (name !== openName) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalParent} ref={ref}>
        <button className={styles.modalButton} onClick={close}>
          <HiXMark />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

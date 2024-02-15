import styles from './Button.module.css';

import React from 'react';

function ButtonText({ children }) {
  return <button className={styles.text}>{children}</button>;
}

export default ButtonText;

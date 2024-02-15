import React, { useState, forwardRef, useRef, useEffect } from 'react';
import styles from './FileInput.module.css';
import { compareAsc } from 'date-fns';

const FileInput = ({ accept, register, validation, id }) => {
  return (
    <>
      <input
        className={styles.fileInput}
        type="file"
        accept={accept}
        {...register(id, validation)}
      ></input>
    </>
  );
};

export default FileInput;

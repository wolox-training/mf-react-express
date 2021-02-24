import React from 'react';

import styles from './styles.module.scss';

interface Props {
  error?: string;
  label: React.ReactNode;
  inputClassName?: string;
  inputRef: any;
  inputType: string;
  name: string;
}

function InputCustom({ error, label, inputRef, inputType, name }: Props) {
  return (
    <>
      <label className={styles.appLabel}>{label}</label>
      <input
        type={inputType}
        className={`${styles.appInput} ${error ? styles.error : ''}`}
        name={name}
        aria-label={name}
        ref={inputRef}
      />
      {error && <span className={styles.appLabelError}>{error}</span>}
    </>
  );
}

export default InputCustom;

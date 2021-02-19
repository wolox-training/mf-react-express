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

function InputCustom({ error, label, inputClassName, inputRef, inputType, name }: Props) {
  return (
    <>
      <label className={styles.appLabel}>{label} </label>
      <input type={inputType} className={`${styles.appInput} ${inputClassName}`} name={name} ref={inputRef} />
      {error && <span className={styles.appLabelError}>{error}</span>}
    </>
  );
}

export default InputCustom;

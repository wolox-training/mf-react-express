import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import logo from './assets/image.png';
import styles from './styles.module.scss';
import { FIELDS } from './constants';

interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

function SignUp() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    // TODO this console.log() will be removed when I develop the integration
    console.log(data);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {FIELDS.map((field: string) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <label className={styles.appLabel}>{i18next.t(`SignUp:${field}`) as string} </label>
            <input name={field} className={styles.appInput} ref={register} />
          </div>
        ))}

        <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />
        <hr className={styles.appHr} />
        <input type="submit" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
      </form>
    </div>
  );
}

export default SignUp;

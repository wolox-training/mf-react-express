import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import logo from './assets/image.png';
import styles from './styles.module.scss';

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
    console.log(data);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appForm}>
        <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.appLabel}>{i18next.t('SignUp:firstName') as string} </label>
          <input name="firstName" ref={register} />
          <label className={styles.appLabel}>{i18next.t('SignUp:lastName') as string} </label>
          <input name="lastName" ref={register} />
          <label className={styles.appLabel}>{i18next.t('SignUp:email') as string} </label>
          <input name="email" ref={register} />
          <label className={styles.appLabel}>{i18next.t('SignUp:password') as string} </label>
          <input name="password" ref={register} />
          <label className={styles.appLabel}>{i18next.t('SignUp:passwordConfirmation') as string} </label>
          <input name="passwordConfirmation" ref={register} />
          <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />
          <hr />
          <input type="submit" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;

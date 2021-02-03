/* eslint-disable complexity */
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
  const { register, errors, handleSubmit, watch, trigger } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appForm}>
        <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.appLabel}>{i18next.t('SignUp:firstName') as string} </label>
          <input type="text" name="firstName" ref={register({ required: true })} />
          {errors.firstName && errors.firstName.type === 'required' && (
            <label className={styles.appLabelError}> Nombre obligatorio </label>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:lastName') as string} </label>
          <input type="text" name="lastName" ref={register({ required: true })} />
          {errors.lastName && errors.lastName.type === 'required' && (
            <label className={styles.appLabelError}> Apellido obligatorio </label>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:email') as string} </label>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && errors.email.type === 'required' && (
            <label className={styles.appLabelError}> E-mail obligatorio </label>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:password') as string} </label>
          <input
            type="password"
            name="password"
            onChange={() => {
              trigger('passwordConfirmation');
            }}
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === 'required' && (
            <label className={styles.appLabelError}> Ingrese una contraseña, por favor </label>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:passwordConfirmation') as string} </label>
          <input
            type="password"
            name="passwordConfirmation"
            ref={register({ required: true, validate: value => value === watch('password') })}
          />
          {errors.passwordConfirmation && errors.passwordConfirmation.type === 'required' && (
            <label className={styles.appLabelError}> Repita su contraseña </label>
          )}
          {errors.passwordConfirmation && errors.passwordConfirmation.type === 'validate' && (
            <label className={styles.appLabelError}> Las contraseñas no coinciden </label>
          )}

          <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />
          <hr />
          <input type="submit" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;

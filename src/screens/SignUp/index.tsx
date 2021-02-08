/* eslint-disable complexity */
import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import { useLazyRequest } from 'hooks/useRequest';

import { signUpService } from '../../services/SignUpService';

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
  const { register, errors, handleSubmit, watch } = useForm<IFormInput>();

  const [, , error, signUpRequest] = useLazyRequest({
    request: signUpService,
    // TODO this console.log() will be removed when I develop the home screen
    withPostSuccess: response => console.log(response)
  });

  const onSubmit = (values: IFormInput) => {
    signUpRequest(values);
  };

  const customAlert = (err: string) => {
    // eslint-disable-next-line no-alert
    alert(err);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.appLabel}>{i18next.t('SignUp:firstName') as string} </label>
        <input
          type="text"
          className={`${styles.appInput} ${errors.firstName ? styles.error : ''}`}
          name="firstName"
          ref={register({ required: true })}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <span className={styles.appLabelError}> {i18next.t('SignUp:errorFirstName') as string} </span>
        )}

        <label className={styles.appLabel}>{i18next.t('SignUp:lastName') as string} </label>
        <input
          type="text"
          className={`${styles.appInput} ${errors.lastName ? styles.error : ''}`}
          name="lastName"
          ref={register({ required: true })}
        />
        {errors.lastName && errors.lastName.type === 'required' && (
          <span className={styles.appLabelError}> {i18next.t('SignUp:errorLastName') as string} </span>
        )}

        <label className={styles.appLabel}>{i18next.t('SignUp:email') as string} </label>
        <input
          type="email"
          className={`${styles.appInput} ${errors.email ? styles.error : ''}`}
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === 'required' && (
          <span className={styles.appLabelError}> {i18next.t('SignUp:errorEmail') as string} </span>
        )}

        <label className={styles.appLabel}>{i18next.t('SignUp:password') as string} </label>
        <input
          type="password"
          className={`${styles.appInput} ${errors.password ? styles.error : ''}`}
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <span className={styles.appLabelError}> {i18next.t('SignUp:errorPassword') as string} </span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <span className={styles.appLabelError}>{i18next.t('SignUp:errorPasswordFormat') as string}</span>
        )}

        <label className={styles.appLabel}>{i18next.t('SignUp:passwordConfirmation') as string} </label>
        <input
          type="password"
          className={`${styles.appInput} ${errors.passwordConfirmation ? styles.error : ''}`}
          name="passwordConfirmation"
          ref={register({ required: true, validate: value => value === watch('password') })}
        />
        {errors.passwordConfirmation && errors.passwordConfirmation.type === 'required' && (
          <label className={styles.appLabelError}>
            {i18next.t('SignUp:errorPasswordConfirmation') as string}
          </label>
        )}
        {errors.passwordConfirmation && errors.passwordConfirmation.type === 'validate' && (
          <label className={styles.appLabelError}>
            {i18next.t('SignUp:errorPasswordConfirmationIdem') as string}
          </label>
        )}

        {error && customAlert(`An error occurs: ${error.problem}`)}

        <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />
        <hr className={styles.appHr} />
        <input type="submit" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
      </form>
    </div>
  );
}

export default SignUp;

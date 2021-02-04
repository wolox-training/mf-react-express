/* eslint-disable complexity */
import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

// import { useLazyRequest } from 'hooks/useRequest';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [state, loading, error, signUpRequest] = useLazyRequest({
  //   request: signUpService,
  //   withPostSuccess: response => {
  //     console.log(response);
  //   },
  //   withPostFailure: () => {
  //     console.log(error);
  //   }
  // });

  function onSubmit(values: IFormInput) {
    signUpService(values);
  }

  return (
    <div className={styles.app}>
      <div className={styles.appForm}>
        <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.appLabel}>{i18next.t('SignUp:firstName') as string} </label>
          <input type="text" name="firstName" ref={register({ required: true })} />
          {errors.firstName && errors.firstName.type === 'required' && (
            <span className={styles.appLabelError}> {i18next.t('SignUp:errorFirstName') as string} </span>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:lastName') as string} </label>
          <input type="text" name="lastName" ref={register({ required: true })} />
          {errors.lastName && errors.lastName.type === 'required' && (
            <span className={styles.appLabelError}> {i18next.t('SignUp:errorLastName') as string} </span>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:email') as string} </label>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && errors.email.type === 'required' && (
            <span className={styles.appLabelError}> {i18next.t('SignUp:errorEmail') as string} </span>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:password') as string} </label>
          <input type="password" name="password" ref={register({ required: true, minLength: 6 })} />
          {errors.password && errors.password.type === 'required' && (
            <span className={styles.appLabelError}> {i18next.t('SignUp:errorPassword') as string} </span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className={styles.appLabelError}>{i18next.t('SignUp:errorPasswordFormat') as string}</span>
          )}

          <label className={styles.appLabel}>{i18next.t('SignUp:passwordConfirmation') as string} </label>
          <input
            type="password"
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

          <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />
          <hr />
          <input type="submit" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;

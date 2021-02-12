/* eslint-disable complexity */
import React, { useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
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
  passwordConfirmation?: string;
}

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);

  const [, , error, signUpRequest] = useLazyRequest({
    request: signUpService,
    // TODO this console.log() will be removed when I develop the home screen
    withPostSuccess: response => {
      console.log(response);
      setLoading(false);
    },
    withPostFailure: () => setLoading(false)
  });

  const onSubmit = (values: IFormInput) => {
    delete values.passwordConfirmation;
    setLoading(true);
    signUpRequest(values);
  };

  const handleValidation = (object: FieldError | undefined) => {
    let t = null;
    if (object?.type === 'required') {
      t = <span className={styles.appLabelError}>{object.message}</span>;
    } else if (object?.type === 'minLength') {
      t = <span className={styles.appLabelError}>{object.message}</span>;
    } else if (object?.type === 'validate') {
      t = <span className={styles.appLabelError}>{object.message}</span>;
    }
    return t;
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)} aria-label="signup-form">
        <label className={styles.appLabel}>{i18next.t('SignUp:firstName') as string} </label>
        <input
          type="text"
          className={`${styles.appInput} ${errors.firstName ? styles.error : ''}`}
          name="firstName"
          aria-label="firstName"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorFirstName') as string
            }
          })}
        />
        {handleValidation(errors.firstName)}

        <label className={styles.appLabel}>{i18next.t('SignUp:lastName') as string} </label>
        <input
          type="text"
          className={`${styles.appInput} ${errors.lastName ? styles.error : ''}`}
          name="lastName"
          aria-label="lastName"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorLastName') as string
            }
          })}
        />
        {handleValidation(errors.lastName)}

        <label className={styles.appLabel}>{i18next.t('SignUp:email') as string} </label>
        <input
          type="email"
          className={`${styles.appInput} ${errors.email ? styles.error : ''}`}
          name="email"
          aria-label="email"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorEmail') as string
            }
          })}
        />
        {handleValidation(errors.email)}

        <label className={styles.appLabel}>{i18next.t('SignUp:password') as string} </label>
        <input
          type="password"
          className={`${styles.appInput} ${errors.password ? styles.error : ''}`}
          name="password"
          aria-label="password"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorPassword') as string
            },
            minLength: {
              value: 6,
              message: i18next.t('SignUp:errorPasswordFormat') as string
            }
          })}
        />
        {handleValidation(errors.password)}

        <label className={styles.appLabel}>{i18next.t('SignUp:passwordConfirmation') as string} </label>
        <input
          type="password"
          className={`${styles.appInput} ${errors.passwordConfirmation ? styles.error : ''}`}
          name="passwordConfirmation"
          aria-label="passwordConfirmation"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorPasswordConfirmation') as string
            },
            validate: value =>
              value === watch('password') || (i18next.t('SignUp:errorPasswordConfirmationIdem') as string)
          })}
        />
        {handleValidation(errors.passwordConfirmation)}

        <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />

        {error && (
          <span className={styles.appLabelError}>
            {i18next.t('SignUp:errorSignUp') as string} {error.problem}
          </span>
        )}

        {loading && <span className={styles.appHr}>{i18next.t('SignUp:loading') as string}</span>}

        <hr className={styles.appHr} />
        <input type="button" value={i18next.t('SignUp:login') as string} className={styles.appLogin} />
      </form>
    </div>
  );
}

export default SignUp;

import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import { useLazyRequest } from 'hooks/useRequest';
import InputCustom from 'components/InputCustom';
import Loading from 'components/Loading';

import { signUpService } from '../../services/SignUpService';

import { IFormInput } from './types';
import logo from './assets/image.png';
import styles from './styles.module.scss';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm();

  const [, loading, error, signUpRequest] = useLazyRequest({
    request: signUpService,
    // TODO this console.log() will be removed when I develop the home screen
    withPostSuccess: response => {
      console.log(response);
    }
  });

  const onSubmit = (values: IFormInput) => {
    signUpRequest(values);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)} aria-label="signup-form">
        <InputCustom
          label={i18next.t('SignUp:firstName') as string}
          name="firstName"
          inputClassName={errors.firstName ? styles.error : ''}
          inputType="text"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorFirstName') as string
            }
          })}
          error={errors?.firstName?.message}
        />

        <InputCustom
          label={i18next.t('SignUp:lastName') as string}
          name="lastName"
          inputClassName={errors.lastName ? styles.error : ''}
          inputType="text"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorLastName') as string
            }
          })}
          error={errors?.lastName?.message}
        />

        <InputCustom
          label={i18next.t('SignUp:email') as string}
          name="email"
          inputClassName={errors.email ? styles.error : ''}
          inputType="text"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorEmail') as string
            }
          })}
          error={errors?.email?.message}
        />

        <InputCustom
          label={i18next.t('SignUp:password') as string}
          name="password"
          inputClassName={errors.password ? styles.error : ''}
          inputType="password"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorPassword') as string
            },
            minLength: {
              value: 6,
              message: i18next.t('SignUp:errorPasswordFormat') as string
            }
          })}
          error={errors?.password?.message}
        />

        <InputCustom
          label={i18next.t('SignUp:passwordConfirmation') as string}
          name="passwordConfirmation"
          inputClassName={errors.passwordConfirmation ? styles.error : ''}
          inputType="password"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:errorPasswordConfirmation') as string
            },
            validate: value =>
              value === watch('password') || (i18next.t('SignUp:errorPasswordConfirmationIdem') as string)
          })}
          error={errors?.passwordConfirmation?.message}
        />

        <input type="submit" value={i18next.t('SignUp:signUp') as string} className={styles.appSignup} />

        {error && (
          <span className={styles.appLabelError}>
            {i18next.t('SignUp:errorSignUp') as string} {error.problem}
          </span>
        )}

        <Loading loading={loading} />

        <hr className={styles.appHr} />

        <a href="/" className={styles.appLogin}>
          {i18next.t('SignUp:login') as string}
        </a>
      </form>
    </div>
  );
}

export default SignUp;

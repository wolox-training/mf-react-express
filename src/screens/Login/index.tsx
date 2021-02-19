import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import { useLazyRequest } from 'hooks/useRequest';
import InputCustom from 'components/InputCustom';

import { loginService } from '../../services/LoginService';

import logo from './assets/image.png';
import styles from './styles.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const { register, errors, handleSubmit } = useForm<IFormInput>();

  const [, , error, loginRequest] = useLazyRequest({
    request: loginService,
    // TODO this console.log() will be removed when I develop the home screen
    withPostSuccess: response => {
      console.log(response);
    }
  });

  const onSubmit = (values: IFormInput) => {
    loginRequest(values);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('Login:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)} aria-label="signup-form">
        <InputCustom
          label={i18next.t('Login:email') as string}
          name="email"
          inputClassName={errors.email ? styles.error : ''}
          inputType="text"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('Login:error') as string
            },
            pattern: {
              value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
              message: i18next.t('Login:errorEmailFormat') as string
            }
          })}
          error={errors?.email?.message}
        />

        <InputCustom
          label={i18next.t('Login:password') as string}
          name="password"
          inputClassName={errors.password ? styles.error : ''}
          inputType="password"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('Login:error') as string
            }
          })}
          error={errors?.password?.message}
        />

        <input type="submit" value={i18next.t('Login:login') as string} className={styles.appSignup} />

        {error && <span className={styles.appLabelError}>{i18next.t('Login:errorLogin') as string}</span>}

        <hr className={styles.appHr} />

        <a href="/sign_up" className={styles.appLogin}>
          {i18next.t('Login:signUp') as string}
        </a>
      </form>
    </div>
  );
}

export default Login;

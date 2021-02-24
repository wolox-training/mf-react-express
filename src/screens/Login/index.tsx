import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import { useLazyRequest } from 'hooks/useRequest';
import InputCustom from 'components/InputCustom';
import Loading from 'components/Loading';

import { loginService } from '../../services/LoginService';
import styles from '../SignUp/styles.module.scss';

import logo from './assets/image.png';
import { IFormInputLogin } from './types';

function Login() {
  const { register, errors, handleSubmit } = useForm<IFormInputLogin>();

  const [, loading, error, loginRequest] = useLazyRequest({
    request: loginService,
    withPostSuccess: response => {
      localStorage.setItem('accessToken', response.data.id);
      window.location.href = '/home';
    }
  });

  const onSubmit = (values: IFormInputLogin) => {
    loginRequest(values);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('Login:logoAlt') as string} />
      <form aria-label="login-form">
        <InputCustom
          label={i18next.t('Login:email') as string}
          name="email"
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
          inputType="password"
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('Login:error') as string
            }
          })}
          error={errors?.password?.message}
        />

        <button type="button" className={styles.appButton} onClick={handleSubmit(onSubmit)}>
          {i18next.t('Login:login') as string}
        </button>

        {error && <span className={styles.appLabelError}>{i18next.t('Login:errorLogin') as string}</span>}

        <Loading loading={loading} />

        <hr className={styles.appHr} />

        <Link to="/sign_up" className={styles.appLink}>
          {i18next.t('Login:signUp') as string}
        </Link>
      </form>
    </div>
  );
}

export default Login;

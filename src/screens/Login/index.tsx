import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { Link, useHistory } from 'react-router-dom';

import { useLazyRequest } from 'hooks/useRequest';
import InputCustom from 'components/InputCustom';
import Loading from 'components/Loading';
import { UserResponse } from 'config/types';
import { setCurrentUser } from 'services/CurrentUserService';
import { loginService } from 'services/LoginService';
import { actionCreators, useDispatch } from 'contexts/reducer';

import styles from '../SignUp/styles.module.scss';
import paths from '../../components/Routes/paths';

import logo from './assets/image.png';
import { IFormInputLogin } from './types';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm<IFormInputLogin>();

  const [, loading, error, loginRequest] = useLazyRequest({
    request: loginService,
    withPostFetch: (response: UserResponse) => {
      const { client, uid } = response.headers;
      setCurrentUser({
        'access-token': response.headers['access-token'],
        client,
        uid
      });
      dispatch(actionCreators.setSession(response.headers['access-token'], client, uid));
      history.push(paths.home);
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

        <Link to={paths.signUp} className={styles.appLink}>
          {i18next.t('Login:signUp') as string}
        </Link>
      </form>
    </div>
  );
}

export default Login;

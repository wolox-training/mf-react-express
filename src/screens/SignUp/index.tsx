import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { Link, useHistory } from 'react-router-dom';

import { useLazyRequest } from 'hooks/useRequest';
import InputCustom from 'components/InputCustom';
import Loading from 'components/Loading';

import { signUpService } from '../../services/SignUpService';
import paths from '../../components/Routes/paths';

import styles from './styles.module.scss';
import { IFormInput } from './types';
import logo from './assets/image.png';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm();
  const history = useHistory();

  const [, loading, error, signUpRequest] = useLazyRequest({
    request: signUpService,
    withPostSuccess: () => {
      history.push(paths.login);
    }
  });

  const onSubmit = (values: IFormInput) => {
    signUpRequest(values);
  };

  return (
    <div className={styles.appForm}>
      <img src={logo} className={styles.appLogo} alt={i18next.t('SignUp:logoAlt') as string} />
      <form aria-label="signup-form">
        <InputCustom
          label={i18next.t('SignUp:firstName') as string}
          name="firstName"
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

        <button type="button" className={styles.appButton} onClick={handleSubmit(onSubmit)}>
          {i18next.t('SignUp:signUp') as string}
        </button>

        {error && (
          <span className={styles.appLabelError}>
            {i18next.t('SignUp:errorSignUp') as string} {error.problem}
          </span>
        )}

        <Loading loading={loading} />

        <hr className={styles.appHr} />

        <Link to={paths.login} className={styles.appLink}>
          {i18next.t('SignUp:login') as string}
        </Link>
      </form>
    </div>
  );
}

export default SignUp;

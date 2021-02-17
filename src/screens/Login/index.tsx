import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import i18next from 'i18next';

// import { useLazyRequest } from 'hooks/useRequest';

// import { signUpService } from '../../services/SignUpService';

import logo from './assets/image.png';
import styles from './styles.module.scss';

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const { register, errors, handleSubmit } = useForm<IFormInput>();

  // const [loading, setLoading] = useState(false);

  // // const [, , error, signUpRequest] = useLazyRequest({
  // //   request: signUpService,
  //   // TODO this console.log() will be removed when I develop the home screen
  //   withPostSuccess: response => {
  //     console.log(response);
  //     setLoading(false);
  //   },
  //   withPostFailure: () => setLoading(false)
  // });

  const onSubmit = (values: IFormInput) => {
    console.log(values);
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
      <img src={logo} className={styles.appLogo} alt={i18next.t('Login:logoAlt') as string} />
      <form onSubmit={handleSubmit(onSubmit)} aria-label="signup-form">
        <label className={styles.appLabel}>{i18next.t('Login:email') as string} </label>
        <input
          type="text"
          className={`${styles.appInput} ${errors.email ? styles.error : ''}`}
          name="email"
          aria-label="email"
          ref={register({
            required: {
              value: true,
              message: i18next.t('Login:errorEmail') as string
            }
          })}
        />
        {handleValidation(errors.email)}

        <label className={styles.appLabel}>{i18next.t('Login:password') as string} </label>
        <input
          type="password"
          className={`${styles.appInput} ${errors.password ? styles.error : ''}`}
          name="password"
          aria-label="password"
          ref={register({
            required: {
              value: true,
              message: i18next.t('Login:errorPassword') as string
            }
          })}
        />
        {handleValidation(errors.password)}

        <input type="submit" value={i18next.t('Login:login') as string} className={styles.appSignup} />

        {/* {error && (
          <span className={styles.appLabelError}>
            {i18next.t('Login:errorSignUp') as string} {error.problem}
          </span>
        )}

        {loading && <span className={styles.appHr}>{i18next.t('Login:loading') as string}</span>} */}

        <hr className={styles.appHr} />

        <a href="/sign_up" className={styles.appLogin}>
          {i18next.t('Login:signUp') as string}
        </a>
      </form>
    </div>
  );
}

export default Login;

import i18next from 'i18next';

i18next.addResources('es', 'SignUp', {
  email: 'Email',
  errorFirstName: 'Nombre obligatorio',
  errorLastName: 'Apellido obligatorio',
  errorEmail: 'E-mail obligatorio',
  errorPassword: 'Ingrese una contraseña, por favor',
  errorPasswordConfirmation: 'Repita su contraseña',
  errorPasswordConfirmationIdem: 'Las contraseñas no coinciden',
  errorPasswordFormat: 'La contraseña es muy corta, debe tener minimo 6 caracteres',
  errorSignUp: 'Un error ocurrio al registrarse: ',
  firstName: 'Nombre',
  lastName: 'Apellido',
  loading: 'Cargando...',
  login: 'Login',
  logoAlt: 'Logo',
  password: 'Contraseña',
  passwordConfirmation: 'Confirmación de Contraseña',
  signUp: 'Registrarse'
});

i18next.addResources('en', 'SignUp', {
  errorFirstName: 'First name required',
  errorLastName: 'Last name required',
  errorEmail: 'E-mail required',
  errorPassword: 'Please, enter a password',
  errorPasswordConfirmation: 'Repeat the password',
  errorPasswordConfirmationIdem: 'Password do not match',
  errorPasswordFormat: 'The password is too short, must have 6 characters',
  errorSignUp: 'An error append: ',
  loading: 'Loading...'
});

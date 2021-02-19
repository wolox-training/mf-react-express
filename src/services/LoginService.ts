import { IFormInputLogin } from 'screens/Login/types';

import api from '../config/api';

api.setBaseURL('https://books-training-rails.herokuapp.com');

export const loginService = (value: IFormInputLogin) => api.post('/api/v1/users/sign_in', value);

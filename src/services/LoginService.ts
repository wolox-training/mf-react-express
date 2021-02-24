import { IFormInputLogin } from 'screens/Login/types';

import api from '../config/api';

export const loginService = (value: IFormInputLogin) => api.post('/api/v1/users/sign_in', value);

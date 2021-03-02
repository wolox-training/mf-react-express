import api from 'config/api';
import { IFormInputLogin } from 'screens/Login/types';

export const loginService = (value: IFormInputLogin) => api.post('/api/v1/users/sign_in', value);

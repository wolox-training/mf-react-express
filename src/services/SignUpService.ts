import api from '../config/api';
import { IFormInput } from '../screens/SignUp/types';

export const signUpService = (value: IFormInput) => api.post('/api/v1/users', value);

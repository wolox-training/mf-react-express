import api from '../config/api';
import { IFormInput } from '../screens/SignUp/types';

api.setBaseURL('https://books-training-rails.herokuapp.com');

export const signUpService = (value: IFormInput) => api.post('/api/v1/users', value);

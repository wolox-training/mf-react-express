import api from '../config/api';

api.setBaseURL('https://books-training-rails.herokuapp.com');

export interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation?: string;
}

export const signUpService = (value: IFormInput) => api.post('/api/v1/users', value);

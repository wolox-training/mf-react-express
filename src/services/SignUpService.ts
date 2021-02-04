import { create } from 'apisauce';

const api = create({ baseURL: 'https://books-training-rails.herokuapp.com/' });

interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export const signUpService = (value: IFormInput) => {
  api.post('/api/v1/users', value);
};

import api from '../config/api';

api.setBaseURL('http://polls.apiblueprint.org');

export interface IFormInput {
  email: string;
  password: string;
}

export const loginService = (value: IFormInput) => api.post('/api/v1/users/sessions', value);

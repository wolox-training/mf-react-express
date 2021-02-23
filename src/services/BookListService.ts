import api from '../config/api';

api.setBaseURL('https://books-training-rails.herokuapp.com');
api.setHeader('Authorization', 'the new token goes here');

export const loginService = () => api.get('/api/v1/users/books');

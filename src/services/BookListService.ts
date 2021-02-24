import api from '../config/api';

api.setHeader('Authorization', 'the new token goes here');

export const loginService = () => api.get('/api/v1/books');

import { create } from 'apisauce';

const api = create({ baseURL: 'https://books-training-rails.herokuapp.com/' });

api.post('/sign-up', { name: 'steve' });

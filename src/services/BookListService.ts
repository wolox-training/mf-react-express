import { BooksResponse } from 'screens/Home/components/BookList/types';

import api from '../config/api';

export const getBooks = () => api.get<BooksResponse>('/api/v1/books');

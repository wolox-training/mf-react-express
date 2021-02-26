import React from 'react';
import i18next from 'i18next';

import { useRequest } from 'hooks/useRequest';
import Loading from 'components/Loading';

import { getBooks } from '../../services/BookListService';

import styles from './styles.module.scss';
import { Book } from './types';

function BookList() {
  const [state, loading, error] = useRequest(
    {
      request: getBooks,
      payload: []
    },
    []
  );

  return (
    <div className={styles.booksList}>
      {error && <span className={styles.bookHr}>{i18next.t('BooksList:error') as string}</span>}
      <Loading loading={loading} />

      {state?.page.map((book: Book) => (
        <div key={book.id} className={styles.book}>
          <img
            src={book.imageUrl}
            alt={i18next.t('BooksList:bookAlt') as string}
            className={styles.bookImage}
          />
          <div className={styles.bookTitle}>{book.title}</div>
          <div className={styles.bookAuthor}>{book.author}</div>
        </div>
      ))}
    </div>
  );
}

export default BookList;

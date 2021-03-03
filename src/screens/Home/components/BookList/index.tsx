import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router';

import { useRequest } from 'hooks/useRequest';
import Loading from 'components/Loading';
import paths from 'components/Routes/paths';
import { getBooks } from 'services/BookService';

import styles from './styles.module.scss';
import { Book } from './types';

function BookList() {
  const history = useHistory();
  const [state, loading, error] = useRequest(
    {
      request: getBooks,
      payload: []
    },
    []
  );

  const handleClick = (id: number) => {
    history.push(paths.bookDetail.replace(':id', `${id}`));
  };

  return (
    <div className={styles.booksList}>
      {error && <span className={styles.bookHr}>{i18next.t('BooksList:error') as string}</span>}
      <Loading loading={loading} />

      {state?.page.map((book: Book) => (
        <div key={book.id} className={styles.book} onClick={() => handleClick(book.id)}>
          <img
            src={book.imageUrl}
            alt={i18next.t('BooksList:bookAlt') as string}
            className={styles.bookImage}
          />
          <p className={styles.bookTitle}>{book.title}</p>
          <p className={styles.bookAuthor}>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;

import React from 'react';
// import { useRequest } from 'hooks/useRequest';

// import { bookListService } from '../../services/BookListService';

import styles from './styles.module.scss';

// interface Props {
//   accessToken: string;
// }

function BookList() {
  //     { accessToken }: Props
  //   const [, , , accessToken] = useRequest({
  //     request: bookListService
  //   });

  return (
    <>
      <h1 className={styles.booklist}> BookList </h1>
    </>
  );
}

export default BookList;

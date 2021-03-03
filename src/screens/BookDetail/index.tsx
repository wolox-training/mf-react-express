import React from 'react';
import { Link, useParams } from 'react-router-dom';
import i18next from 'i18next';

import { useRequest } from 'hooks/useRequest';
import { getBook } from 'services/BookService';
import paths from 'components/Routes/paths';
import Loading from 'components/Loading';

import styles from './styles.module.scss';
import backArrow from './assets/back-arrow.png';
import badge from './assets/badge.png';

interface Params {
  id: string;
}

function BookDetail() {
  const { id } = useParams<Params>();
  const [state, loading] = useRequest({ request: getBook, payload: id }, []);

  return (
    <div className={styles.book}>
      <Link to={paths.home} className={styles.backText}>
        <img src={backArrow} className={styles.backArrow} alt={i18next.t('BookDetail:backArrow') as string} />
        {i18next.t('BookDetail:goBack') as string}
      </Link>

      <Loading loading={loading} />

      <div className={`${styles.bookCard} row`}>
        <img src={state?.imageUrl} className={styles.bookImg} alt={i18next.t('BookDetail:book') as string} />
        <img src={badge} className={styles.badge} alt={i18next.t('BookDetail:badge') as string} />
        <div className={`${styles.bookInfo} column`}>
          <div className={styles.titleWrapper}>
            <span className={styles.bookTitle}>{state?.title}</span>
            <span className={styles.bookGenre}>({state?.genre})</span>
          </div>
          <div className={styles.bookDetails}>
            <span className={styles.bookDetailsIndex}>{i18next.t('BookDetail:author') as string}</span>
            <span className={styles.bookDetailsItem}>{state?.author}</span>
          </div>
          <div className={styles.bookDetails}>
            <span className={styles.bookDetailsIndex}>{i18next.t('BookDetail:editor') as string}</span>
            <span className={styles.bookDetailsItem}>{state?.editor}</span>
          </div>
          <div className={styles.bookDetails}>
            <span className={styles.bookDetailsIndex}>{i18next.t('BookDetail:year') as string}</span>
            <span className={styles.bookDetailsItem}>{state?.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

import i18next from 'i18next';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  loading: boolean;
}

function Loading({ loading }: Props) {
  return <>{loading && <span className={styles.loadHr}>{i18next.t('Loading:loading') as string}</span>}</>;
}

export default Loading;

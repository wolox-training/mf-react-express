import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router-dom';

import paths from '../Routes/paths';

import logo from './assets/image.png';
import styles from './styles.module.scss';

function NavBar() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push(paths.login);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt={i18next.t('NavBar:logoAlt') as string} />
        <button type="button" className={styles.appLink} onClick={handleLogout}>
          {i18next.t('NavBar:logout') as string}
        </button>
      </header>
    </div>
  );
}

export default NavBar;

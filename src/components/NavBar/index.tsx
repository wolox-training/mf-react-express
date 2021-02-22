import React from 'react';
import i18next from 'i18next';

import logo from './assets/image.png';
import styles from './styles.module.scss';

function NavBar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
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

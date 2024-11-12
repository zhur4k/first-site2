import React from 'react';
import styles from '../components/InfCatalog.module.css';

function InfCatalog() {
  return (
    <div className={`${styles.container} ${styles.imagebackground}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>51 базовая и актуальная модель</h1>
          <h2>
            Картхолдеры, кошельки, багажные бирки, браслеты, 
            несессеры, брелоки и т. д.
          </h2>
        </div>
        <a href='/catalog' className={styles.button}>В каталог</a>
      </div>
    </div>
  );
}

export default InfCatalog;
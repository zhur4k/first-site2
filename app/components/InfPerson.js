import React from 'react';
import styles from '../components/InfPerson.module.css';

function InfPerson() {
  return (
    <div className={`${styles.container} ${styles.imagebackground}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Брендируем изделия любым методом</h1>
          <h2>
          Тиснение, лазерная гравировка, нанесение рисунка на материал
          </h2>
        </div>
        <a href='/persongift' className={styles.button}>Подробнее о брендировании ›</a>
      </div>
    </div>
  );
}

export default InfPerson;
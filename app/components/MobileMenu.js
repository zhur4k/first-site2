import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/MobileMenu.module.css'; // Импортируем стили

const MobileMenu = () => {
  return (
    <div className={styles.mobilemenucontainer}>
      <Link href="/catalog" className={styles.mobilemenulink}>
      <Image
        className={styles.img}
        src="/icons/catalog.png"
        alt="Наверх"
        width={30}
        height={30}
      />
      Каталог
      </Link>
      <p className={styles.raz}>|</p>
      <Link href="/components/PageForm" className={styles.mobilemenulink}>
      <Image
        className={styles.img}
        src="/icons/sms.png"
        alt="Наверх"
        width={30}
        height={30}
      />
      Оставить <br/>
      заявку
      </Link>
      <p className={styles.raz}>|</p>
      <Link href="/contacts" className={styles.mobilemenulink}>
      <Image
        className={styles.img}
        src="/icons/phone.png"
        alt="Наверх"
        width={30}
        height={30}
      />
      Контакты
      </Link>
    </div>
  );
};

export default MobileMenu;
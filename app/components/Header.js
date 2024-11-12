'use client'

import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Функция для закрытия меню
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/metrallo new.png"
                        alt="Логотип"
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href="/catalog" className={pathname === '/catalog' ? styles.active : ''} onClick={closeMenu}>Каталог</Link>
                <Link href="/persongift" className={pathname === '/persongift' ? styles.active : ''} onClick={closeMenu}>Индивидуализация</Link>
                <Link href="/blog" className={pathname === '/blog' ? styles.active : ''} onClick={closeMenu}>Блог</Link>
                <Link href="/payment" className={pathname === '/payment' ? styles.active : ''} onClick={closeMenu}>Доставка/Оплата</Link>
                <Link href="/contacts" className={pathname === '/contacts' ? styles.active : ''} onClick={closeMenu}>Контакты</Link>
                <Link href="tel:+375291092099" className={styles.nomber} onClick={closeMenu}>
                    +375(29)109-20-99 (А1)
                </Link>
                <Link href="/components/PageForm" className={styles.orderButton} onClick={closeMenu}>
                    Оформить заявку
                </Link>
            </div>

            <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image
                    src="/svg/menu.svg"
                    alt="Меню"
                    width={40}
                    height={40}
                />
            </button>
        </header>
    );
};

export default Header;

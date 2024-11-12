'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './Contact.module.css';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs';

// Breadcrumbs data
const crumbs = [
    { href: '/', title: 'Главная' },
    { href: '/contacts', title: 'Контакты' },
];

const Contact = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [comment, setComment] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `<b>Заявка со страницы Контактов!</b>\n` +
            `<b>Телефон: </b> ${phone}\n` +
            `<b>Имя: </b> ${name}\n` +
            `<b>Соц.сеть: </b> ${contact}\n` ;

        const TELEGRAM_TOKEN = '7391007479:AAGIS-Vvh1tM_wPiP04BH4mxJbKmF-oiLFk'; // REACT_APP_TELEGRAM_TOKEN
        const TELEGRAM_CHAT_ID = '-1002242731089'; // REACT_APP_TELEGRAM_CHAT_ID
        const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

        axios.post(URI_API, {
            chat_id: TELEGRAM_CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then(() => {
                setPhone('');
                setName('');
                setContact('');
                setSuccessMessage('Сообщение отправлено!');
            })
            .catch((err) => {
                console.warn(err);
            });
    };

    return (
        <div>
            <div style={{ position: 'relative', padding: '80px 0 0 80px' }}>
                <Breadcrumbs crumbs={crumbs} />
            </div>
            <div className={styles.contactContainer}>
                <h1 className={styles.maintitle}>Свяжитесь с нами</h1>

                <div className={styles.gridContainer}>
                    <div className={styles.companyInfo}>
                        <h2 className={styles.title}>ООО "Визионер Групп"</h2>
                        <p className={styles.pText}>УНП 693257297</p>
                        <p className={styles.pText}>Юридический и почтовый адрес:</p>
                        <p className={styles.pText}>г. Минск, проспект Независимости, 168к1, оф. 34</p>
                        <p className={styles.pText}>ЗАО Альфа-Банк, ул. Сурганова, 43-47</p>
                        <p className={styles.pText}>БИК SWIFT ALFABY2X</p>
                        <p className={styles.pText}>Р/С BY23 ALFA 3013 2E87 8900 1027 0000</p>
                    </div>

                    <div className={styles.individualInfo}>
                        <h2 className={styles.title}>ИП Тишкевич Максим Александрович</h2>
                        <p className={styles.pText}>УНП 693257297</p>
                        <p className={styles.pText}>ЗАО Альфа-Банк, ул. Сурганова, 43-47</p>
                        <p className={styles.pText}>БИК SWIFT ALFABY2X</p>
                        <p className={styles.pText}>Р/С BY23 ALFA 3013 2E87 8900 1027 0000</p>
                    </div>

                    <div className={styles.timework}>

                    </div>

                    <div className={styles.contactForm}>
                        <h2 className={styles.title}>Оставить заявку</h2>
                        <form className={styles.formContainer} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Telegram, Viber, почта"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                            <button type="submit">Отправить</button>

                            {successMessage && (
                                <div className={styles.alert} role="alert">
                                    {successMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

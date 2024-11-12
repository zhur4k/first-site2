'use client'

import React, { useState } from 'react';
import Image from "next/image";
import styles from '../payment/Payment.module.css';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs';


// Хлебные крошки
const crumbs = [
    {href: '/', title: 'Главная'},
    {href: '/payment', title: 'Доставка/Оплата'},
];

export default function Payment() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

    const popupData = [
        {
            id: "popup1",
            headerText: "Оформление оптового заказа",
            imageSrc: "/payment/opt-pic.svg",
            text: "- Через онлайн чат",
            text2: "- +375(29)109-20-99",
            text3: "- Через мессенджеры: Telegram, Whatsapp, Viber",
            buttonText: "ОК"
        },
        {
            id: 'popup2',
            headerText: "Оплата корпоративных подарков",
            imageSrc: "/payment/koop-pic.svg",
            text: '- Безналичным путем по выставленной счет-фактуре.',
            text2: '- По карте через интернет-банкинг (Visa, MasterCard)',
            text3: '- Мы работаем по 100% и частичной предоплате. Если вам необходимы другие способы оплаты, пожалуйста, напишите нам.',
            buttonText: 'ОК'
        },
        {
            id: 'popup3',
            headerText: "Минимальный заказ и доставка",
            imageSrc: '/payment/minzak-pic.svg',
            text: '- По Минску доставка бесплатная на сумму от 300 рублей.',
            text2: '- По Беларуси доставка бесплатная при заказе на сумму от 500 рублей.',
            text3: '- Минимальная сумма заказа 300 рублей. Работаем только с оптовыми заказами.',
            buttonText: 'ОК'
        }
    ];


    const openPopup = (popupId) => {
    const content = popupData.find(popup => popup.id === popupId);
    setPopupContent(content);
    setPopupOpen(true);
  };

    return (
        <div className={styles.raw}>
            <div style={{position: 'relative', padding: '0 0 30px 80px'}}>
                <Breadcrumbs crumbs={crumbs}/>
            </div>
            <div className={styles.paymentContainer}>
                <div className={styles.left}>
                    <h2>Как мы работаем</h2>
                    <h1>Простой и надежный <br/>
                        алгоритм нашей работы</h1>
                    <div className={styles.left_text}>
                        <p>Мы отлично знаем как трудно организовать корпоративное <br/>
                            мероприятие самостоятельно, поэтому берем всю работу и <br/>
                            ответственность на себя: отшив и показ образца, подбор <br/>
                            материалов, ручное производство всей партии, упаковка, <br/>
                            оформление документов, подготовка груза к транспортировке, <br/>
                            бережная погрузка и разгрузка.</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.infoContainer}>
                        <span className={styles.number}>1</span>
                        <span className={styles.text}>
      Вы приходите к нам со своей идеей и<br/>
      мы формируем ассортимент заказа
    </span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span className={styles.number}>2</span>
                        <span className={styles.text}>
      Предлагаем в качестве основы подарки <br/>
      из каталога или разрабатываем их с <br/>
      нуля под вас.
    </span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span className={styles.number}>3</span>
                        <span className={styles.text}>
      Определяем количество моделей, чем <br/>
      больше изделий вам нужно, тем меньше <br/>
      стоимость каждого.
    </span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span className={styles.number}>4</span>
                        <span className={styles.text}>
      Договариваемся о условиях оплаты и <br/>
      подписываем договор.
    </span>
                    </div>
                    <div className={styles.infoContainer}>
                        <span className={styles.number}>5</span>
                        <span className={styles.text}>
      Вы получаете все заказанные изделия <br/>
      с логотипом в установленный срок.
    </span>
                    </div>
                </div>
            </div>

            <div className={styles.popupContainer}>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn} onClick={() => openPopup('popup1')}>
                    </button>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn2} onClick={() => openPopup('popup2')}>
                    </button>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn3} onClick={() => openPopup('popup3')}>
                    </button>
                </div>

            </div>

            {isPopupOpen && (
                <div className={styles.popupoverlay} id="popupOverlay">
                    <div className={styles.popup} id="popup">
                        <div className={styles.popupheader}>
                            {popupContent.headerText}
                        </div>
                        <div className={styles.popupcontent}>
                            <div className={styles.popupimage}>
                                <Image src={popupContent.imageSrc} alt="Popup Image" width={100} height={100}/>
                            </div>
                            <div className={styles.popuptext}>
                                {popupContent.text}<br/>
                                {popupContent.text2}<br/>
                                {popupContent.text3}
                            </div>
                        </div>
                        <button onClick={() => setPopupOpen(false)}>
                            {popupContent.buttonText}
                        </button>
                    </div>
                </div>
            )}


        </div>


    );
}

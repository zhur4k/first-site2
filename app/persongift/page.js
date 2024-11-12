import styles from './Persongift.module.css';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs';
import React from "react";

const crumbs = [
    {href: '/', title: 'Главная'},
    {href: '/persongift', title: 'Индивидуализация'},
];

export default function Persongift() {
    return (
        <>
            <div style={{position: 'relative', padding: '80px 0 0 80px'}}>
                <Breadcrumbs crumbs={crumbs}/>
            </div>
            <div className={styles.header}>
                <h2>— НЕ НАШЛИ ЧТО-ТО ПОДХОДЯЩЕЕ ИЗ ГОТОВЫХ НАБОРОВ?</h2>
                <h1>Разработка индивидуального проекта</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.square}>
                        <h3>Персонализация и брендирование</h3>
                        <p>На все изделия «METRALLO» можно нанести <span
                            className={styles.highlight}>инициалы</span> или полностью <span
                            className={styles.highlight}>фамилию</span>, <span
                            className={styles.highlight}>имя</span> и <span className={styles.highlight}>отчество</span>.
                            Так же для компаний предусмотрено <span
                                className={styles.highlight}>персонализация</span> изделий <span
                                className={styles.highlight}>логотипом</span>, <span
                                className={styles.highlight}>названием</span> или <span
                                className={styles.highlight}>фразой</span>.
                        </p>
                    </div>

                    <div className={styles.square}>
                        <h3>Тиснение, символика, слоган компании</h3>
                        <p><span className={styles.highlight}>Нанесение изображения</span>, <span
                            className={styles.highlight}>надписи</span> с помощью пресса и <span
                            className={styles.highlight}>клише</span>, путём оттиска. Только с <span
                            className={styles.highlight}>Вашим</span> логотипом - подарок, будет выполнять свою основную
                            функцию и <span className={styles.highlight}>постоянно</span> напоминать владельцу <span
                                className={styles.highlight}>о Вас</span>, <span
                                className={styles.highlight}>рекламировать</span> торговую марку, формирует её
                            позитивный <span className={styles.highlight}>имидж</span>.
                        </p>
                    </div>

                    <div className={styles.square}>
                        <h3>Индивидуальная разработка</h3>
                        <p>Кроме стандартных подарков в последнее время всё чаще презентуют <span
                            className={styles.highlight}>оригинальные сувениры</span>, связанные со сферой деятельности
                            организации - <span className={styles.highlight}>фотоальбомы</span>, предметы <span
                                className={styles.highlight}>декора</span> и <span
                                className={styles.highlight}>интерьера</span>. Мы готовы реализовать <span
                                className={styles.highlight}>полёт вашей фантазии</span>.
                        </p>
                    </div>
                </div>

                <div className={styles.footerText}>
                    <p className={styles.footerTextP}>Учитывая все ваши пожелания по материалу, оформлению, упаковке,
                        цветовому решению, бюджету и тиражу,</p>
                    <p className={styles.footerTextP}>Мы разработаем уникальную концепцию корпоративных подарков.</p>
                    <p className={styles.footerTextP}>Также предложим различные способы брендирования.</p>
                </div>
            </div>
        </>
    );
}

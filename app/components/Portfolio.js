import React, { useState, useEffect } from 'react';
import styles from '../components/Portfolio.module.css';

const portfolioItems = [
    { imgSrc: "/image/11.jpg", alt: "Проект 1" },
    { imgSrc: "/image/12.jpg", alt: "Проект 2" },
    { imgSrc: "/image/13.jpg", alt: "Проект 3" },
    { imgSrc: "/image/14.jpg", alt: "Проект 4" },
    { imgSrc: "/image/15.jpg", alt: "Проект 5" },
    { imgSrc: "/image/16.jpg", alt: "Проект 6" },
    { imgSrc: "/image/17.jpg", alt: "Проект 7" },
    { imgSrc: "/image/18.jpg", alt: "Проект 8" }
];

const PortfolioSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Индекс активного слайда
    const [isAnimating, setIsAnimating] = useState(false); // Статус анимации

    // Функция для переключения на следующий слайд
    const nextSlide = () => {
        if (isAnimating) return; // Если идет анимация, не переключаем
        setIsAnimating(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length); // Следующий слайд
    };

    // Функция для переключения на предыдущий слайд
    const prevSlide = () => {
        if (isAnimating) return; // Если идет анимация, не переключаем
        setIsAnimating(true);
        setActiveIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length); // Предыдущий слайд
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide(); // Переключаем на следующий слайд каждую секунду
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    // Используем useEffect, чтобы отключить анимацию после завершения
    useEffect(() => {
        if (!isAnimating) return;
        const timer = setTimeout(() => setIsAnimating(false), 500); // Завершаем анимацию через 500ms
        return () => clearTimeout(timer);
    }, [isAnimating]);

    // Вычисление индексов слайдов для отображения (всего 5: слева, в центре и справа)
    const slides = [
        portfolioItems[(activeIndex - 2 + portfolioItems.length) % portfolioItems.length], // Левый слайд
        portfolioItems[(activeIndex - 1 + portfolioItems.length) % portfolioItems.length], // Боковой слева
        portfolioItems[activeIndex], // Центральный слайд
        portfolioItems[(activeIndex + 1) % portfolioItems.length], // Боковой справа
        portfolioItems[(activeIndex + 2) % portfolioItems.length] // Правый слайд
    ];

    return (
        <div className={styles.sliderContainer}>
            <h2 className={styles.title}>Виды изделий</h2>
            <div className={styles.slider}>
                <div className={styles.slidesWrapper}>
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.sliderItem} ${index === 2 ? styles.active : ''} ${isAnimating ? styles.animating : ''}`}
                        >
                            <div className={styles.imageWrapper}>
                                <img className={styles.image} src={item.imgSrc} alt={item.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navigation}>
                <button className={styles.prevArrow} onClick={prevSlide}>‹</button>
                <button className={styles.def} onClick={prevSlide}>-</button>
                <button className={styles.nextArrow} onClick={nextSlide}>›</button>
            </div>
        </div>
    );
};

export default PortfolioSlider;

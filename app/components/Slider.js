import React, { useState, useEffect } from 'react';
import styles from '../components/Slider.module.css';
import Geolending from '../components/Geolending';

const images = [
  '/image/1.jpg',
  '/image/2.jpg',
  '/image/3.jpg',
  '/image/4.jpg',
  '/image/5.jpg',
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Изменение изображения каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <img src={images[currentImageIndex]} alt="Slider" className={styles.image} />
      
        <div className={styles.text}>
        <div className={styles.textContainer}>
        <h1> Изготовление <br/>корпоративных <br/>
        подарков</h1>
           <br/>
           <a href='/catalog' className={styles.button}>Выбрать</a>
      </div>
      
    </div>
</div>
  );
};

export default Slider;
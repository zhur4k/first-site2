'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import products from '../../catalog/product'; // Путь к файлу с данными о товарах
import styles from './CatalogPage.module.css';
import Link from 'next/link';
import Breadcrumbs from './../../BreadCrumbs/Breadcrumbs';

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [activeBtn, setActiveBtn] = useState('price30'); // Управление активным классом для кнопок
  const [isMobile, setIsMobile] = useState(false); // Состояние для управления мобильным видом
     const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    if (id) {
      const product = products.find(product => product.id === id);
      setProductData(product);
      setCurrentImage(product?.imgctl1);
      setCurrentPrice(product?.price30);
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Определяем мобильное устройство
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Устанавливаем начальное значение

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!productData) {
    return <div>Загрузка...</div>;
  }

  const handleMouseEnter = (img) => {
    setCurrentImage(img);
  };

  const handleImageClick = () => {
    window.open(currentImage, '_blank');
  };

    const handlePriceChange = (priceKey) => {
        setCurrentPrice(productData[priceKey]);
        setActiveBtn(priceKey);
    };

  const crumbs = [
    { href: '/', title: 'Главная' },
    { href: '/catalog', title: 'Каталог' },
    { href: '', title: productData.title }
  ];

  return (
    <div className={styles.all}>
    <div className={styles.columnscreen}>
        <div className={styles.productmain}>
            <div className={styles.productmain_left}>
                <div className={styles.imageContainer}>
                    <a href="/catalog" className={styles.btnback}>&#8249;</a>
                    <img
                        className={styles.img}
                        src={productData.imgctl1}
                        alt={productData.name}
                        width={100}
                        height={100}
                        onMouseEnter={() => handleMouseEnter(productData.imgctl1)}/>
                    <img
                        className={styles.img}
                        src={productData.imgctl2}
                        alt={productData.title}
                        width={100}
                        height={100}
                        onMouseEnter={() => handleMouseEnter(productData.imgctl2)}/>
                    <img
                        className={styles.img}
                        src={productData.imgctl3}
                        alt={productData.title}
                        width={100}
                        height={100}
                        onMouseEnter={() => handleMouseEnter(productData.imgctl3)}/>
                </div>

                <div className={styles.imgContainer}>
                    <img
                        className={styles.imgR}
                        src={currentImage}
                        alt={productData.title}
                        onClick={handleImageClick}/>
                </div>
            </div>
            <div className={styles.productmain_right}>
                <div className={styles.maintext}>
                    <h1 className={styles.title}>{productData.title}</h1>
                    {/*<h3 className={styles.productDescTitle}>ХАРАКТЕРИСТИКИ:</h3>*/}
                    {/*<p className={styles.productDesc}>{productData.features}</p>*/}
                    {/*<br/>*/}
                </div>

                <div className={styles.columnprice}>
                    <div className={styles.fixedContainerM}>
                        <h1 className={styles.currentPrice}>{currentPrice} / шт</h1>
                        <div className={styles.buttonContainer}>
                            <a
                                className={`${styles.btnM} ${activeBtn === 'price30' ? styles.active : ''}`}
                                onClick={() => handlePriceChange('price30')}>
                                от 20 шт
                            </a>
                            <a
                                className={`${styles.btnM} ${activeBtn === 'price100' ? styles.active : ''}`}
                                onClick={() => handlePriceChange('price100')}>
                                от 100 шт
                            </a>
                            <a
                                className={`${styles.btnM} ${activeBtn === 'price300' ? styles.active : ''}`}
                                onClick={() => handlePriceChange('price300')}>
                                от 300 шт
                            </a>
                        </div>
                    </div>

                    <div className={styles.fixedContainer}>
                        <button
                            className={styles.autoButton}
                            onClick={() => window.location.href = '/components/PageForm'}
                        >
                            Заявка на просчёт
                        </button>
                        <a href="/KP/КП «METRALLO» корпоративные подарки.pdf" download>
                            <button className={styles.button}>
                                <span className={styles.text}>Коммерческое предложение</span>
                                <img
                                    width={30}
                                    height={30}
                                    src='/icons/downlogo.png'
                                    alt='иконка metrallo'
                                    className={styles.image}
                                />
                            </button>
                        </a>
                    </div>
                    <br/>
                    <h3 className={styles.productDescTitle}>Описание:</h3>
                    <p className={styles.productDesc}>{productData.description}</p>
                    <button className={styles.featuresButton} onClick={() => setShowFeatures(true)}>
                        Характеристики
                    </button>
                </div>
                {showFeatures && (
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <h3>Характеристики</h3>
                            <p>{productData.features}</p>
                            <button className={styles.closeButton} onClick={() => setShowFeatures(false)}>
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>


        <div className={styles.columnscreenmobile}>
            <div className={styles.roundedContainer}>
            <div className={styles.imageContainer}>
            <a href="/catalog" className={styles.btnback}>&#8249;</a>
            <img
            className={styles.imgRm}
            src={currentImage} 
            alt={productData.name}
            width={516}
            height={688}
            onClick={handleImageClick} />
      </div>
  
      <div className={styles.imgRow}>
      <img 
          className={styles.imgctl}
          src={productData.imgctl1} 
          alt={productData.name}
          width={54}
          height={54}
          onMouseEnter={() => handleMouseEnter(productData.imgctl1)} 
          />
      <img 
          className={styles.imgctl}
          src={productData.imgctl2} 
          alt={productData.name}
          width={54}
          height={54}
          onMouseEnter={() => handleMouseEnter(productData.imgctl2)} />
      <img 
          className={styles.imgctl}
          src={productData.imgctl3} 
          alt={productData.name}
          width={54}
          height={54}
          onMouseEnter={() => handleMouseEnter(productData.imgctl3)} />
      </div>
      </div>


      <div className={styles.roundedContainer}>
      <div className={styles.maintextM}>
     <h1 className={styles.productName}>{productData.title}</h1>
     <h1 className={styles.currentPrice}>{currentPrice} / шт</h1>
          <div className={styles.buttonContainer}>
              <a
                  className={`${styles.btnM} ${activeBtn === 'price30' ? styles.active : ''}`}
                  onClick={() => handlePriceChange('price30')}>
                  от 20 шт
              </a>
              <a
                  className={`${styles.btnM} ${activeBtn === 'price100' ? styles.active : ''}`}
                  onClick={() => handlePriceChange('price100')}>
                  от 100 шт
              </a>
              <a
                  className={`${styles.btnM} ${activeBtn === 'price300' ? styles.active : ''}`}
                  onClick={() => handlePriceChange('price300')}>
                  от 300 шт
              </a>
          </div>
      </div>

      </div>
            <div className={styles.fixedContainer}>
                <a href="/KP/КП «METRALLO» корпоративные подарки.pdf" download>
                    <button className={styles.button}>
                        <img
                            width={30}
                            height={30}
                            src='/icons/downlogo.png'
        alt='иконка metrallo'
        className={styles.image}
      />
      <span className={styles.text}>КП</span>
      </button>
      </a>
      <button 
              className={styles.autoButton} 
              onClick={() => window.location.href='/components/PageForm'}
              >
              Заявка на просчёт
            </button>        
      </div>

      <div className={styles.roundedContainer}>
      <br/>
      <h3 className={styles.productDescTitle}>ОПИСАНИЕ:</h3>
      <p className={styles.productDesc}>{productData.description}</p>
      <br/> 
      <h3 className={styles.productDescTitle}>ХАРАКТЕРИСТИКИ:</h3>
      <p className={styles.productDesc}>{productData.features}</p> 
      <br/>
      <h3 className={styles.productDescTitle}>ОФОРМЛЕНИЕ ЗАКАЗА:</h3>
      <p className={styles.productDesc}>{productData.checkout}</p> 
            <br/>
      </div>
      
      
    </div>
    </div>
  );
};

export default ProductPage;
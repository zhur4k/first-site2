'use client'

import React, { useState } from 'react';
import styles from '../catalog/Catalog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import products from '../catalog/product'; // Убедитесь, что путь к файлу верный
import Form from '../components/Form';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs'

const DropdownMenu = () => {
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const productsPerPage = 12;

  const showAllProducts = () => {
    setFilters([]);
    setCurrentPage(1);
  };

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter(item => item !== tag));
    } else {
      setFilters([...filters, tag]);
    }
    setCurrentPage(1);
  };

  const filteredProducts = filters.length > 0
  ? products.filter(product => 
      Array.isArray(product.tags) && // Проверяем, что product.tags - это массив
      filters.some(filter => product.tags.includes(filter))
    )
  : products;

  // Пагинация
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

// Хлебные крошки
    const crumbs = [
      { href: '/', title: 'Главная' },
      { href: '/catalog', title: 'Каталог' },
      
    ];


// Фильтры
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);

    const toggleFiltersMenu = () => {
      setShowFiltersMenu(!showFiltersMenu);
    };
  
    const applyFilters = () => {
      // Действия по применению выбранных фильтров
      setShowFiltersMenu(false); // Закрыть меню после применения фильтров
    };

  return (
    <div>
      <div className={styles.divGrid}>
        <Breadcrumbs crumbs={crumbs} />
        <h1 onClick={() => window.location.href = '/catalog'} style={{ cursor: 'pointer' }}>Каталог</h1>
      </div>
      <div className={styles.divItems}>
        <p className={styles.filterTitle}>{filters.join(' | ').toUpperCase()}</p>
        <button className={styles.filterButton} onClick={toggleFiltersMenu}>
        <img src="/icons/filter.png" 
           alt="Описание картинки" 
           width={20}
           height={20}
           />
        Фильтры
      </button>

      {showFiltersMenu && (
        <div className={styles.fon50}>
        <div className={styles.burgerMenu}>
          <h2>ФИЛЬТРЫ</h2>
          <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из натуральной кожи');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из натуральной кожи
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из экокожи');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из экокожи
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из ткани');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из ткани
        </p>
        
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Папки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Папки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Косметички');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Косметички
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Визитницы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Визитницы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Кошельки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Кошельки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Ключницы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Ключницы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Блокноты');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Блокноты
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Обложки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Обложки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Ремни');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Ремни
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Брелки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Брелки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Багажные бирки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Багажные бирки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Рюкзаки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Рюкзаки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Шоперы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Шоперы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки дорожные');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки дорожные
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Собойки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Собойки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки поясные');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки поясные
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Мешки для обуви');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Мешки для обуви
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Велосипедки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Велосипедки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Барсетки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Барсетки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Кобура');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Кобура
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки на шею');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки на шею
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Прочие аксессуары');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Прочие аксессуары
        </p>
          
          <button className={styles.applyButton} onClick={applyFilters}>
            Применить
          </button>
        </div>
        </div>
      )}





      <div className={styles.divUpStart}>
        <div className={styles.divGridFilter}>
          <h2>ФИЛЬТРЫ</h2>
          

          <p className={styles.p} >
          
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из натуральной кожи');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из натуральной кожи
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из экокожи');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из экокожи
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Из ткани');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Из ткани
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Папки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Папки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Косметички');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Косметички
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Визитницы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Визитницы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Кошельки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Кошельки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Ключницы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Ключницы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Блокноты');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Блокноты
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Обложки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Обложки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Ремни');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Ремни
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Брелки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Брелки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Багажные бирки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Багажные бирки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Рюкзаки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Рюкзаки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Шоперы');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Шоперы
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки дорожные');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки дорожные
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Собойки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Собойки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки поясные');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки поясные
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Мешки для обуви');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Мешки для обуви
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Велосипедки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Велосипедки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Барсетки');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Барсетки
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Кобура');
            window.scrollTo({ top: 0, behavior: 'smooth' });}

           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Кобура
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Сумки на шею');
            window.scrollTo({ top: 0, behavior: 'smooth' });}
          }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Сумки на шею
        </p>
        <p className={styles.p} >
          <label className={styles.checkboxios}>
           <input type="checkbox" onClick={() => {toggleFilter('Прочие аксессуары');
            window.scrollTo({ top: 0, behavior: 'smooth' });}
           }/>
           <span className={styles.checkboxiosswitch}></span>
           </label>
           Прочие аксессуары
        </p>


        </div>

        <div className={styles.divProduct}>
          {/* Отображение отфильтрованных продуктов */}
          {currentProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              {/* Оберните изображение и название в Link */}
              <Link href={`/catalog/${product.id}`} key={product.id}>
              <div className={styles.productImageWrapper}>
                  <img
                      src={product.imgctl1}
                      alt={product.name}
                      className={styles.productImage}
                      width={270}
                      height={270} // Изменено на 270 для квадратного формата
                  />
                  <img
                      src={product.imgctl2} // Например, другое изображение для эффекта наведения
                      alt={product.name}
                      className={styles.productImageHover}
                      width={270}
                      height={270} // Изменено на 270 для квадратного формата
                  />
              </div>

                <p className={styles.productName}>{product.name}</p>
              </Link>
              <p className={styles.productPrice}>{product.price300}</p>
            </div>
          ))}
        </div>
        </div>

        {/* Пагинация */}
        <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => {
                paginate(index + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх
              }}
              className={currentPage === index + 1 ? styles.active : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>

      <Form />

      

    </div>
  );
};

export default DropdownMenu;
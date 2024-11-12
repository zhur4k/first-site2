'use client'

import styles from './../ScrollToTopButton/Scroll.module.css';
import React, { useCallback } from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <button onClick={scrollToTop} className={styles.scrollToTopButton}>
      <img
        src="/icons/scroll-top.png"
        alt="Наверх"
        width={40}
        height={40}
      />
    </button>
  );
};

export default ScrollToTopButton;
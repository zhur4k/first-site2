'use client'

import React, { useEffect, useState } from 'react';
import styles from './popupA.module.css';

function Popup() {
  return (
    <div className="popupoverlay hidden" id="popupOverlay">
      <div className={styles.popup} id="popup">
        <div className={styles.popupcontent}>
          <div className={styles.popupimage}>
            <img src="/path/to/your/image.jpg" alt="Popup Image" />
          </div>
          <div className={styles.popuptext}>
            <ul>
              <li>Пункт 1</li>
              <li>Пункт 2</li>
              <li>Пункт 3</li>
            </ul>
          </div>
        </div>
        <button className={styles.popupbtn} onClick={() => document.getElementById('popupOverlay').classList.add('hidden')}>ОК</button>
      </div>
    </div>
  );
}

export default Popup;
'use client'

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../components/Form.module.css'; // Убедитесь, что у вас есть этот CSS модуль

const Form = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [comment, setComment] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const message = `<b>Заявка с сайта!</b>\n` +
                      `<b>Телефон: </b> ${phone}\n` +
                      `<b>Имя: </b> ${name}\n` +
                      `<b>Соц.сеть: </b> ${contact}\n` +
                      `<b>Комм.: </b> ${comment}`;


      //при импорте проекта заменить токены
      const TELEGRAM_TOKEN = '7391007479:AAGIS-Vvh1tM_wPiP04BH4mxJbKmF-oiLFk' //REACT_APP_TELEGRAM_TOKEN=7391007479:AAGIS-Vvh1tM_wPiP04BH4mxJbKmF-oiLFk
      const TELEGRAM_CHAT_ID = '-1002242731089' //REACT_APP_TELEGRAM_CHAT_ID=-1002242731089
      const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

      
      console.log('Токен: ', process.env.REACT_APP_TELEGRAM_TOKEN);
      console.log('ID чата: ', process.env.REACT_APP_TELEGRAM_CHAT_ID);

  
      axios.post(URI_API, {
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: 'html',
        text: message
      })
      .then(() => {
        setPhone('');
        setName('');
        setContact('');
        setComment('');
        setSuccessMessage('Сообщение отправлено!');
      })
      .catch((err) => {
        console.warn(err);
      });
    };
  
    return (
        <div className={styles.container}>
          <div className={styles.centeredContent}>
            <form id="tg" onSubmit={handleSubmit}>

              <h1>Расчет стоимости и сроков <br/>
                изготовления заказа</h1>

              <div className={styles.formGroupNone}>
                <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="off"
                    maxLength={15}
                    required
                />
              </div>

              <div className={styles.formGroupNone}>
                <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                    maxLength={50}
                    required
                />
              </div>

              <div className={styles.formGroupNone}>
                <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Telegram, Viber, E-mail"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    autoComplete="off"
                    maxLength={50}
                />
              </div>

              <div className={styles.formGroupNone}>
              <textarea
                  type="text"
                  className={styles.formControlTa}
                  placeholder="Комментарий"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  autoComplete="off"
                  maxLength={500}
              ></textarea>
              </div>

              <div className={styles.formGroupNone}>
                {successMessage && (
                    <div className={styles.alert} role="alert">
                      {successMessage}
                    </div>
                )}
              </div>


              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.buttonPayment}>Отправить</button>
              </div>

              <p className={styles.agreement}>
                <strong>Нажимая на кнопку «Отправить», Вы даете согласие на обработку персональных данных.</strong>
              </p>

            </form>
          </div>
        </div>

    );
};

export default Form;
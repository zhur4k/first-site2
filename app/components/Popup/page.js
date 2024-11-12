'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './../Popup/Popup.module.css';

function Popup() {
    const [one_st, setOne] = useState('');
    const [two_st, setTwo] = useState('');
    const [thr_st, setThr] = useState('');

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [compony, setCompony] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValues2, setSelectedValues2] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // Новое состояние

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter(item => item !== value));
        }
    
        setOne(selectedValues.join(', ')); // Обновляем состояние one_st с помощью join
    }

    const handleCheckboxChange2 = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelectedValues2([...selectedValues2, value]);
        } else {
            setSelectedValues2(selectedValues2.filter(item => item !== value));
        }
    
        setTwo(selectedValues2.join(', ')); // Обновляем состояние one_st с помощью join
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const message = `<b>ЗАЯВКА С POPUP!</b>\n` +

                        `<b>Вид подарка: </b> ${selectedValues.join(', ')}\n` +
                        `<b>Категория: </b> ${selectedValues2.join(', ')}\n` +
                        `<b>Количество: </b> ${thr_st}\n` +
                        `<b></b>        \n` +
                        `<b>Телефон: </b> ${phone}\n` +
                        `<b>Имя: </b> ${name}\n` +
                        `<b>Почта: </b> ${email}\n` +
                        `<b>Компания: </b> ${compony}`;

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

  setOne('');
  setTwo('');
  setThr('');

  setPhone('');
  setName('');
  setEmail('');
  setCompony('');
  setIsSubmitted(true); // Устанавливаем состояние отправки
  setSuccessMessage('Сообщение отправлено!');

  // Закрываем попап
  setIsVisible(false);
})
.catch((err) => {
  console.warn(err);
});
};



    const [isVisible, setIsVisible] = useState(false);
    const [currentContent, setCurrentContent] = useState(1);

    const handleClose = () => {
        setIsVisible(false); // Закрываем попап
    };

    const handleTestClick = () => {
        setCurrentContent(2);
    };

    const handleNextClick = () => {
        if (currentContent < 5) {
            setCurrentContent(currentContent + 1);
        }
        
    };

    const getProgressWidth = () => {
        return `${(currentContent - 1) * 25}%`; // Рассчитываем ширину шкалы прогресса
    };

    useEffect(() => {
        if (!isSubmitted) { // Проверяем состояние isSubmitted
            const interval = setInterval(() => {
                setIsVisible(true);
            }, 1654367); // Попап появится каждые 3 минуты

            return () => clearInterval(interval);
        }
    }, [isSubmitted]); // Добавляем зависимость

    return (
        <>
            {isVisible && (
                <div className={styles.popup} id="tg" onSubmit={handleSubmit}>
                    <div className={styles.progressBar} style={{ width: getProgressWidth() }}></div> {/* Шкала прогресса */}
                    
                    <button className={styles.closeButton} onClick={handleClose}>×</button>


                    {currentContent === 1 && (
                        <div className={styles.popupcontent}>
                            <div className={styles.popuptext}>
                
                            <h2>Подберём корпоративные подборки под любой праздник</h2>
                            <p>Пройдите небольшой тест для подборки подарка и получите скидку 10% на любой имеющийся товар!</p>
                            <h3>Получите скидку 10% ↓</h3>
                            <button className={styles.buttonA} onClick={handleTestClick}>Пройти тест</button>
                            <a href="tel:+375291092099" className={styles.popupnomber}>
                               +375(29)109-20-99 (А1)
                            </a>
                            </div>
                            <div className={styles.popupimage}>
                            <img 
                                src="/image/1234.png" 
                                width={500}
                                height={500}
                                alt="Картинка" 
                            />
                            </div>
        
                        </div>
                    )}




                    {currentContent === 2 && (
                        <div className={styles.popupcontent1}>
                        <div className={styles.divG}>
                            <h1>Какие корпоративные подарки Вас интересуют?</h1>
                            
                            <div className={styles.rotatingImage}>
                                <img src="/icons/sale/0.png" 
                                alt="Rotating Image" 
                                className={styles.rotating} 
                                width={100}
                                height={100} 
                                />
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.formGroupNone}>

                                <p className={styles.text}>Корпоративные</p>
                                <img src="/catalog/icon-page/2.png" 
                                     alt={styles.name} 
                                     className={styles.productImage} 
                                     width={200}
                                     height={200} />
                                <input 
                                     type="checkbox" 
                                     className={styles.button_name1} 
                                     value="Корпоративные" 
                                     onChange={handleCheckboxChange} 
                                     autoComplete="off" />
                                     
                            </div>
            
                            <div className={styles.formGroupNone}>
                                <p className={styles.text}>23 февраля</p>
                                <img src="/catalog/icon-page/4.png" 
                                     alt={styles.name} 
                                     className={styles.productImage} 
                                     width={200}
                                     height={200} />
                                <input type="checkbox" 
                                     className={styles.button_name1}  
                                     value="23 февраля" 
                                     onChange={handleCheckboxChange} 
                                     autoComplete="off" />
                            </div>
            
                            <div className={styles.formGroupNone}>
                                <p className={styles.text}>8 марта</p>
                                <img src="/catalog/icon-page/5.png" 
                                     alt={styles.name} 
                                     className={styles.productImage} 
                                     width={200}
                                     height={200} />
                                <input type="checkbox" 
                                     className={styles.button_name1} 
                                     value="8 марта" 
                                     onChange={handleCheckboxChange} 
                                     autoComplete="off" />
                            </div>
            
                            <div className={styles.formGroupNone}>
                                <p className={styles.text}>Новый год</p>
                                <img src="/catalog/icon-page/1.png" 
                                     alt={styles.name} 
                                     className={styles.productImage} 
                                     width={200}
                                     height={200} />
                                <input type="checkbox" 
                                     className={styles.button_name1} 
                                     value="Новый год" 
                                     onChange={handleCheckboxChange} 
                                     autoComplete="off" />
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        <button className={styles.buttonB} onClick={handleNextClick}>Далее</button>
                    </div>
                    )}   




                    {currentContent === 3 && (
                        <div className={styles.popupcontent1}>
                        <div className={styles.divG}>
                        <h1>Что Вас интересует?</h1>
                        <div className={styles.rotatingImage}>
                            <img src="/icons/sale/3.png" 
                            alt="Rotating Image" 
                            className={styles.rotating} 
                            width={100}
                            height={100}/>
                        </div>
                        </div>
                        <div className={styles.divider}></div>
                    <div className={styles.inputCont}>


                    <div className={styles.plash}>
                    <input 
                        type="checkbox" 
                        className={styles.checkboxInput}
                        value="Из натуральной кожи"
                        onChange={handleCheckboxChange2} 
                        autoComplete="off" 
                        />
                         <label className={styles.chlabel}>Из натуральной кожи</label>
                    </div>


                    <div className={styles.plash}>
                    <input 
                        type="checkbox" 
                        className={styles.checkboxInput}
                        value="Из экокожи"
                        onChange={handleCheckboxChange2} 
                        autoComplete="off" 
                        />
                         <label className={styles.chlabel}>Из экокожи</label>
                    </div>

                    <div className={styles.plash}>
                    <input 
                        type="checkbox" 
                        className={styles.checkboxInput}
                        value="Из ткани"
                        onChange={handleCheckboxChange2} 
                        autoComplete="off" 
                        />
                         <label className={styles.chlabel}>Из ткани</label>
                    </div>

                    <div className={styles.plash}>
                    <input 
                        type="checkbox" 
                        className={styles.checkboxInput}
                        value="Мерч"
                        onChange={handleCheckboxChange2}                         
                        autoComplete="off" 
                        />
                         <label className={styles.chlabel}>Мерч</label>
                    </div>

                    <div className={styles.plash}>
                    <input 
                        type="checkbox" 
                        className={styles.checkboxInput}
                        value="Полиграфия"
                        onChange={handleCheckboxChange2} 
                        autoComplete="off" 
                        />
                         <label className={styles.chlabel}>Полиграфия</label>
                    </div>

                    </div>
                    <div className={styles.divider}></div>
                        
                    <button className={styles.buttonB} onClick={handleNextClick}>Далее</button>
                    </div>
                    )}





                    {currentContent === 4 && (
                        <div className={styles.popupcontent1}>
                        <div className={styles.divG}>
                            <h1>Что Вас интересует?</h1>
                            <div className={styles.rotatingImage}>
                                <img src="/icons/sale/7.png" 
                                alt="Rotating Image" 
                                className={styles.rotating} 
                                width={100}
                                height={100}/>
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.inputCont}>
                            <div className={styles.plash2}>
                                <input 
                                    type="radio" 
                                    className={styles.radioInput}
                                    value="до 30"
                                    onChange={(e) => setThr(e.target.value)}
                                    autoComplete="off" 
                                    name="quantity"
                                />
                                <label className={styles.chlabel}>До 30шт</label>
                            </div>

                            <div className={styles.plash2}>
                                <input 
                                    type="radio" 
                                    className={styles.radioInput}
                                    value="31-100"
                                    onChange={(e) => setThr(e.target.value)}
                                    autoComplete="off" 
                                    name="quantity"
                                />
                                <label className={styles.chlabel}>от 31-100шт </label>
                            </div>

                            <div className={styles.plash2}>
                                <input 
                                    type="radio" 
                                    className={styles.radioInput}
                                    value="100-300"
                                    onChange={(e) => setThr(e.target.value)}
                                    autoComplete="off" 
                                    name="quantity"
                                />
                                <label className={styles.chlabel}>от 100-300шт</label>
                            </div>

                            <div className={styles.plash2}>
                                <input 
                                    type="radio" 
                                    className={styles.radioInput}
                                    value="более 300"
                                    onChange={(e) => setThr(e.target.value)}
                                    autoComplete="off" 
                                    name="quantity"
                                />
                                <label className={styles.chlabel}>Более 300шт</label>
                            </div>

                            <div className={styles.plash2}>
                                <input 
                                    type="radio" 
                                    className={styles.radioInput}
                                    value="другое"
                                    onChange={(e) => setThr(e.target.value)}
                                    autoComplete="off" 
                                    name="quantity"
                                />
                                <label className={styles.chlabel}>Другое...</label>
                            </div>
                            
                        </div>
                        <div className={styles.divider}></div>
                        <button className={styles.buttonB} onClick={handleNextClick}>Далее</button>
                    </div>
                    )}





                    {currentContent === 5 && (
                        <form>
                        <div className={styles.popupcontent2}>
                            <div className={styles.divG}>
                            <h1>Заполните форму, чтобы получить результаты теста</h1>
                            
                            <div className={styles.rotatingImage}>
                                <img src="/icons/sale/10.png" 
                                alt="Rotating Image" 
                                className={styles.rotating} 
                                width={100}
                                height={100}/>
                            </div>
                            </div>
                            <h1 className={styles.saleStyle}>Ваша скидка: 10%</h1>
                            <div className={styles.formGrid}>
                            <div className={styles.formGroupNone}>
                              <input 
                                type="text" 
                                className={styles.formControl} 
                                placeholder="Телефон*" 
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
                                placeholder="Ваше ИМЯ*" 
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
                                placeholder="example@.ru" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off" 
                                maxLength={50}
                              />
                            </div>
  
                            <div className={styles.formGroupNone}>
                              <input 
                                type="text" 
                                className={styles.formControl}
                                placeholder="Название Вашей компании" 
                                value={compony}
                                onChange={(e) => setCompony(e.target.value)}
                                autoComplete="off" 
                                maxLength={500}
                             ></input>
                           </div>

                            </div>
                            <div className={styles.divH}>
                                
                                {successMessage && (
                                <div className={styles.alert} role="alert">
                                {successMessage}</div>)}

                                <button type="submit" className={styles.buttonB} onClick={handleNextClick}>Отправить</button>

                                <p>Нажимая на кнопку «Отправить», Вы даете согласие на обработку персональных данных.</p>

                            </div>
                        </div>
                        </form>
                    )}


                </div>
            )}
        </>
    );
}

export default Popup;
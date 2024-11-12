'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const declensions = {
  'Минск': 'Минске',
  'Гомель': 'Гомеле',
  'Гродно': 'Гродно',
  'Витебск': 'Витебске',
  'Могилёв': 'Могилёве',
  'Брест': 'Бресте',
  'Бобруйск': 'Бобруйске',
  'Барановичи': 'Барановичах',
  'Борисов': 'Борисове',
  'Пинск': 'Пинске',
  'Мозырь': 'Мозыре',
  'Лида': 'Лиде',
  'Орша': 'Орше',
  'Солигорск': 'Солигорске',
  'Новополоцк': 'Новополоцке',
  'Молодечно': 'Молодечно',
  'Полоцк': 'Полоцке',
  'Жлобин': 'Жлобине',
  'Светлогорск': 'Светлогорске',
  'Речица': 'Речице',
  'Жодино': 'Жодино',
  'Слуцк': 'Слуцке',
  'Кобрин': 'Кобрине',
};

const CityDisplay = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const cityName = response.data.city;

        const translateResponse = await axios.get('https://translate.googleapis.com/translate_a/single', {
          params: {
            client: 'gtx',
            sl: 'en',
            tl: 'ru',
            dt: 't',
            q: cityName,
          },
        });

        const translatedCity = translateResponse.data[0][0][0];

        const cityInPrepositional = declensions[translatedCity] || translatedCity;

        setCity(cityInPrepositional);
      } catch (error) {
        setError('Беларусь');
      }
    };

    fetchCity();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <p>в {city}</p>}
    </div>
  );
};

export default CityDisplay;

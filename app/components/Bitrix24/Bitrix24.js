'use client'

import React, { useEffect } from 'react';

const Bitrix24Button = () => {
    useEffect(() => {
        (function(w, d, u) {
            const s = d.createElement('script');
            s.async = true;
            s.src = u + '?' + (Date.now() / 60000 | 0);
            const h = d.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        })(window, document, 'https://cdn-ru.bitrix24.by/b29374160/crm/site_button/loader_1_h3mtsb.js');
    }, []);

    return (
        <div className="bitrix24-button-container">
        </div>
    );
};

export default Bitrix24Button;

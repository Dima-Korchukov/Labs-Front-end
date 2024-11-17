// Image.js
import React from 'react';

const Image = ({ src, alt }) => (
    <div>
        <h3>Фото Львова:</h3>
        <img src={src} alt={alt} id="lviv-img" width="500" />
        <p>
            <a href="https://hotel-edem.lviv.ua/ru/putevoditel-po-lvovu/" target="_blank" rel="noopener noreferrer">
                Посилання на фото
            </a>
        </p>
    </div>
);

export default Image;

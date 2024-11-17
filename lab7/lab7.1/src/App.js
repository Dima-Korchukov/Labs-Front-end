import React, { useState } from "react";
import './style.css';

function App() {
    const [imgWidth, setImgWidth] = useState(500);
    const [imgVisible, setImgVisible] = useState(true);
    const [highlightedItems, setHighlightedItems] = useState({
        powerlifting: false,
        gaming: false,
    });

    // Логіка підсвічування елементів в списку хобі
    const handleElementClick = (item) => {
        setHighlightedItems(prevState => ({
            ...prevState,
            [item]: !prevState[item], // Перемикає стан підсвічування
        }));
    };

    const handleAddImage = () => setImgVisible(true);
    const handleIncreaseImage = () => setImgWidth((prevWidth) => prevWidth + 50);
    const handleDecreaseImage = () => setImgWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : prevWidth));
    const handleRemoveImage = () => setImgVisible(false);

    return (
        <div>
            <h2>Корчуков Дмитро Олександрович</h2>
            <p>Я народився у місті Кобеляки 23 грудня 2004 року.</p>
            <p>Закінчив Кобеляцький Ліцей №1, зараз навчаюсь на 3 курсі в КПІ.</p>

            <h3>Мої хобі:</h3>
            <ul>
                <li>
                    Воркаут
                </li>
                <li
                    className={highlightedItems.powerlifting ? 'highlight' : ''}
                    onClick={() => handleElementClick('powerlifting')}
                >
                    Пауерліфтинг
                </li>
                <li
                    className={highlightedItems.gaming ? 'highlight-green' : ''}
                    onClick={() => handleElementClick('gaming')}
                >
                    Геймінг
                </li>
            </ul>

            <h3>Улюблені фільми:</h3>
            <ol>
                <li id="film1">"Інтерстеллар"</li>
                <li id="film2">"Месники: Фінал"</li>
                <li id="film3">"Сам удома"</li>
            </ol>

            <h3>Місто, яке мені сподобалось:</h3>
            <p>Мені дуже сподобався Львів. Це місто зачаровує своєю архітектурою, культурними пам'ятками та атмосферою старовини. Вулиці Львова просякнуті історією, і кожен куточок має своє особливе значення. Найбільше мене вразили площа Ринок та численні кав'ярні.</p>

            <h3>Фото Львова:</h3>
            {imgVisible && <img src="lviv.webp" alt="Фото Львова" id="lviv-img" width={imgWidth} />}

            <p><a href="https://hotel-edem.lviv.ua/ru/putevoditel-po-lvovu/" target="_blank" rel="noopener noreferrer">Посилання на фото</a></p>
            
            <div id="image-controls">
                <button onClick={handleAddImage}>Додати зображення</button>
                <button onClick={handleIncreaseImage}>Збільшити зображення</button>
                <button onClick={handleDecreaseImage}>Зменшити зображення</button>
                <button onClick={handleRemoveImage}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default App;

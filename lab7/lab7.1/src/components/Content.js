// Content.js
import React, { Component, createRef } from 'react';
import './App.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgWidth: 500,
            imgVisible: true,
        };
        this.imgRef = createRef();
        this.allElementsRefs = Array.from({ length: 20 }, () => createRef()); // Припустимо максимум 20 елементів
        this.targetElementIndex = (5 % 10) + 1;
    }

    componentDidMount() {
        this.allElementsRefs.forEach((ref, index) => {
            if (ref.current) {
                ref.current.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (index === this.targetElementIndex) {
                        ref.current.classList.toggle('highlight');
                        ref.current.classList.remove('highlight-green');
                    } else if (index === this.targetElementIndex + 1) {
                        ref.current.classList.toggle('highlight-green');
                        ref.current.classList.remove('highlight');
                    }
                });
            }
        });
    }

    handleAddImage = () => {
        this.setState({ imgVisible: true });
    };

    handleIncreaseImage = () => {
        this.setState((prevState) => ({ imgWidth: prevState.imgWidth + 50 }));
    };

    handleDecreaseImage = () => {
        this.setState((prevState) => ({
            imgWidth: Math.max(50, prevState.imgWidth - 50),
        }));
    };

    handleRemoveImage = () => {
        this.setState({ imgVisible: false });
    };

    render() {
        const { imgWidth, imgVisible } = this.state;

        return (
            <div>
                <h3>Мої хобі:</h3>
                <ul>
                    <li ref={this.allElementsRefs[0]} id="hobby1">Воркаут</li>
                    <li ref={this.allElementsRefs[1]} id="hobby2">Пауерліфтинг</li>
                    <li ref={this.allElementsRefs[2]} id="hobby3">Геймінг</li>
                </ul>
                <h3>Улюблені фільми:</h3>
                <ol>
                    <li ref={this.allElementsRefs[3]} id="film1">"Інтерстеллар"</li>
                    <li ref={this.allElementsRefs[4]} id="film2">"Месники: Фінал"</li>
                    <li ref={this.allElementsRefs[5]} id="film3">"Сам удома"</li>
                </ol>

                <h3>Фото Львова:</h3>
                {imgVisible && (
                    <img
                        ref={this.imgRef}
                        src="lviv.webp"
                        alt="Фото Львова"
                        id="lviv-img"
                        width={imgWidth}
                    />
                )}

                <div id="image-controls">
                    <button onClick={this.handleAddImage}>Додати зображення</button>
                    <button onClick={this.handleIncreaseImage}>Збільшити зображення</button>
                    <button onClick={this.handleDecreaseImage}>Зменшити зображення</button>
                    <button onClick={this.handleRemoveImage}>Видалити зображення</button>
                </div>
            </div>
        );
    }
}

export default Content;

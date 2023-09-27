import React from 'react';
import './card.css';
import dictionary from '../words/words';

export default class Card extends React.Component {
    render() {
        const { english, russian, src, transcription, topic } = this.props;
        return (
            <div className="card__container">
                <div className="card__cover">
                    <div className="card__english">
                        <p>{english}</p>
                    </div>
                    <div className="card__transcription">
                        <p>{transcription}</p>
                    </div>
                    <div className="card__img">
                        <img className="card__image" src={src} alt={english} />
                    </div>
                    <div className="card__russian">
                        <p>{russian}</p>
                    </div>
                    <div className="card__topic">
                        <p>{topic}</p>
                    </div>
                </div>
                <div className="card__buttons">
                    <button className="card__to-learn">Изучить</button>
                    <button className="card__know">Знаю</button>
                </div>
            </div>
        )
    }
}
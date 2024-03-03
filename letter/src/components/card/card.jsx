import React from 'react';
import './card.css';
import dictionary from '../words/words';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card__container">
                {dictionary.map((word) =>
                    <div className="card__cover" key={word.id}>
                        <div className="card__english">
                            <p>{word.english}</p>
                        </div>
                        <div className="card__transcription">
                            <p>{word.transcription}</p>
                        </div>
                        <div className="card__russian">
                            <p>{word.russian}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
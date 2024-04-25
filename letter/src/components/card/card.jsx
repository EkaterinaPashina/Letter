import React from 'react';
import card from './Card.module.css';

export default function Card({ id, english, transcription, russian }) {
    return (
        <div className={card.cover} key={id}>
            <div className={card.english}>
                <p>{english}</p>
            </div>
            <div className={card.transcription}>
                <p>{transcription}</p>
            </div>
            <div className={card.russian}>
                {russian}
            </div>
        </div>
    )
}
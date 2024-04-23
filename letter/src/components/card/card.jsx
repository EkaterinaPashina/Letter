import React from 'react';
import './card.css';

export default function Card({ id, english, transcription, russian }) {
    return (
        <div className="card__cover" key={id}>
            <div className="card__english">
                <p>{english}</p>
            </div>
            <div className="card__transcription">
                <p>{transcription}</p>
            </div>
            <div className="card__russian">
                {russian}
            </div>
        </div>
    )
}
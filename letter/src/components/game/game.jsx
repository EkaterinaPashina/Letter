import React from 'react';
import { useState } from "react";
import './game.css';
import dictionary from '../data/words';
import Translatebutton from '../translate-button/translate-button';

export default function Game() {
    const [isTranslated, setIsTranslated] = useState(false);

    const showTranslation = () => {
        setIsTranslated(!isTranslated);
    }

    return (
        <div className="game__container">
            {dictionary.map((word) =>
                <div className="game__cover" key={word.id}>
                    <div className="game__english">
                        <p>{word.english}</p>
                    </div>
                    <div className="game__transcription">
                        <p>{word.transcription}</p>
                    </div>
                    <div className="game__russian" onClick={showTranslation}>
                        {isTranslated ? (<p>{word.russian}</p>) : (<Translatebutton className="game__translate" text="Перевести" />)}
                    </div>
                </div>
            )}
        </div>
    )
}
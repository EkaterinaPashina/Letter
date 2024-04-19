import React from 'react';
import { useState } from "react";
import './game.css';
import left from './left.png';
import right from './right.png';
import dictionary from '../data/words';
import Translatebutton from '../translate-button/translate-button';

export default function Game() {
    const [isTranslated, setIsTranslated] = useState(false);

    const showTranslation = () => {
        setIsTranslated(true);
    }

    const handleLeft = () => {
        console.log("Нажата левая кнопка");
    }

    const handleRight = () => {
        console.log("Нажата правая кнопка");
    }

    return (
        <>
            <h3 className="game__learnt">Изучено слов: </h3>
            <div className="game__container">
                <div className="game__leftButton" onClick={handleLeft}>
                    <img className="game__Button-img" src={left} alt="Arrow to left" />
                </div>
                <div className="game__cover" key={1}>
                    <div className="game__english">
                        <p>mango</p>
                    </div>
                    <div className="game__transcription">
                        <p>манго</p>
                    </div>
                    <div className="game__russian" onClick={showTranslation}>
                        {isTranslated ? (<p>Манго</p>) : (<Translatebutton className="game__translate" text="Перевести" />)}
                    </div>
                </div>
                <div className="game__leftButton" onClick={handleRight}>
                    <img className="game__Button-img" src={right} alt="Arrow to right" />
                </div>
            </div>
        </>
    )
}

// {dictionary.map((word) =>
//     <div className="game__cover" key={word.id}>
//         <div className="game__english">
//             <p>{word.english}</p>
//         </div>
//         <div className="game__transcription">
//             <p>{word.transcription}</p>
//         </div>
//         <div className="game__russian" onClick={showTranslation}>
//             {isTranslated ? (<p>{word.russian}</p>) : (<Translatebutton className="game__translate" text="Перевести" />)}
//         </div>
//     </div>
// )}



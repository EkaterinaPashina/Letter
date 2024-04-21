import React from 'react';
import { useState } from "react";
import Card from '../../components/card/card';
import './Game.css';
import left from './left.png';
import right from './right.png';
import dictionary from "../../components/data/words";
import Translatebutton from "../../components/translate-button/translate-button";

export default function Game() {
    const [isTranslated, setIsTranslated] = useState(false);
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [learntWordsArr, setLearntWordsArr] = useState([]);

    const showUniqLearntWords = () => {
        return Array.from(new Set(learntWordsArr));
    }

    const showTranslation = (e) => {
        setIsTranslated(true);
        learntWordsArr.push(dictionary[index].russian);
        setLearntWordsArr(showUniqLearntWords());
        setCount(showUniqLearntWords().length);
    }

    const handleLeft = () => {
        console.log("Нажата левая кнопка");
        if (index > 0) {
            setIndex(index - 1);
            setIsTranslated(false);
        }
    }

    const handleRight = () => {
        console.log("Нажата правая кнопка");
        if (index < dictionary.length - 1) {
            setIndex(index + 1);
            setIsTranslated(false);
        }
    }

    return (
        <>
            <h3 className="game__learnt">Изучено слов: {count}</h3>
            <div className="game__container">
                <div className="game__leftButton" onClick={handleLeft}>
                    <img className="game__Button-img" src={left} alt="Arrow to left" />
                </div>
                <Card id={dictionary[index].id} english={dictionary[index].english} transcription={dictionary[index].transcription} russian={<div className="game__russian" onClick={showTranslation}>
                    {isTranslated ? (<p>{dictionary[index].russian}</p>) : (<Translatebutton className="game__translate" text="Перевести" />)}
                </div>} />
                <div className="game__leftButton" onClick={handleRight} >
                    <img className="game__Button-img" src={right} alt="Arrow to right" />
                </div>
            </div>
        </>
    )
}
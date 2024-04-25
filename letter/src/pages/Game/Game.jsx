import React, { useState, useEffect, useRef } from 'react';
import Card from '../../components/Card/Card';
import game from './Game.module.css';
import translateButton from '../../components/TranslateButton/TranslateButton.module.css';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import dictionary from "../../data/Words";
import TranslateButton from "../../components/TranslateButton/TranslateButton";


export default function Game() {
    const [isTranslated, setIsTranslated] = useState(false);
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [learntWordsArr, setLearntWordsArr] = useState([]);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);
    const translateButtonRef = useRef(null);

    useEffect(() => {
        setIsFirst(index === 0);
        setIsLast(index === dictionary.length - 1);

        if (translateButtonRef.current) {
            translateButtonRef.current.focus();
        }
    }, [index, translateButtonRef]);

    const showUniqLearntWords = () => {
        return Array.from(new Set(learntWordsArr));
    }

    const showTranslation = () => {
        setIsTranslated(true);
        learntWordsArr.push(dictionary[index].russian);
        setLearntWordsArr(showUniqLearntWords());
        setCount(showUniqLearntWords().length);
    }

    const handleLeft = () => {
        if (index > 0) {
            setIndex(index - 1);
            setIsTranslated(false);
        }
    }

    const handleRight = () => {
        if (index < dictionary.length - 1) {
            setIndex(index + 1);
            setIsTranslated(false);
        }
    }

    return (
        <>
            <h3 className={game.game__learnt}>Изучено слов: {count}</h3>
            <div className={game.game__container}>
                <button className={game.game__leftButton} onClick={handleLeft} disabled={isFirst}>
                    <img className={game.game__Button_img} src={left} alt="Arrow to left" />
                </button>
                <Card id={dictionary[index].id} english={dictionary[index].english} transcription={dictionary[index].transcription} russian={<div className={game.game__russian} onClick={showTranslation}>
                    {isTranslated ? (<p>{dictionary[index].russian}</p>) : (<TranslateButton className={translateButton.game__translate} text="Перевести" />)}
                </div>} />
                <button className={game.game__rightButton} onClick={handleRight} disabled={isLast}>
                    <img className={game.game__Button_img} src={right} alt="Arrow to right" />
                </button>
            </div >
            <h3 className={game.game__page}>{index + 1}/{dictionary.length}</h3>
        </>
    )
}
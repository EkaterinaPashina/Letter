import React from 'react';
import Card from '../../components/Card/Card';
import card from './Cards.module.css';
import dictionary from "../../data/Words";

export default function Cards() {
    return (
        <div className={card.cards__container}>
            {dictionary.map((word) => <Card key={word.id} id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />)}
        </div>
    )
}
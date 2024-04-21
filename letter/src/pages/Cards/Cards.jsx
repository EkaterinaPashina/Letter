import React from 'react';
import Card from '../../components/card/card';
import './Cards.css';
import dictionary from "../../components/data/words";

export default function Cards() {
    return (
        <div className="cards__container">
            {dictionary.map((word) => <Card key={word.id} id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />)}
        </div>
    )
}
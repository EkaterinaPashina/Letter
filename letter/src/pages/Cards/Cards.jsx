import React from 'react';
import Card from '../../components/Card/Card';
import card from './Cards.module.css';
//import dictionary from "../../data/Words";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function Cards() {
    const { words } = useContext(DataContext);
    return (
        <div className={card.cards__container}>
            {words.map((word) => <Card key={word.id} id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />)}
        </div>
    )
}
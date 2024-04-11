import React from 'react';
import './main.css';
import Card from '../card/card';
import Titles from '../titles/titles';
import dictionary from '../words/words';
import Table from '../table/table';


export default function Main() {
    return (
        // <div className="main">
        //     <Titles />
        //     {dictionary.map((word) =>
        //         <Card english={word.english}
        //             russian={word.russian}
        //             transcription={word.transcription}
        //             topic={word.topic} />)}
        // </div>
        <Table />
    )
}
import React from 'react';
import main from './Main.module.css';
import dictionary from "../../data/Words";
import AddLine from "../../components/AddLine/AddLine";
import Table from '../../components/Table/Table';
import { useState } from 'react';

export default function Main() {
    const [defaultData, setDefaultData] = useState(dictionary);

    const [textEnglish, setTextEnglish] = useState("");
    const [textTranscription, setTextTranscription] = useState("");
    const [textRussian, setTextRussian] = useState("");
    const [textTopic, setTextTopic] = useState("");

    const [textEmpty, setTextEmpty] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textEnglish !== "" && textRussian !== "" && textTranscription !== "" && textTopic !== "") {
            setDefaultData([...defaultData, { id: `${defaultData.length + 1}`, english: `${textEnglish}`, russian: `${textRussian}`, transcription: `${textTranscription}`, topic: `${textTopic}` },]);
            setTextEmpty("");
        } else {
            setTextEmpty("Заполните все поля перед добавлением слова");
        }
    };

    return (
        <>
            <AddLine textEnglish={textEnglish} setTextEnglish={setTextEnglish} textTranscription={textTranscription} setTextTranscription={setTextTranscription} textRussian={textRussian} setTextRussian={setTextRussian} textTopic={textTopic} setTextTopic={setTextTopic} handleSubmit={handleSubmit} />
            <p className={main.empty}>{textEmpty}</p>
            <Table defaultData={defaultData} />
        </>
    )
}

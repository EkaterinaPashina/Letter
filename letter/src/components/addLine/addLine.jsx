import React, { useState } from 'react';
import addLine from "./AddLine.module.css";


export default function AddLine({ textEnglish, setTextEnglish, textTranscription, setTextTranscription, textTopic, setTextTopic, textRussian, setTextRussian, handleSubmit, }) {


    return (
        <form className={addLine.addLine} onSubmit={handleSubmit}>
            <legend className={addLine.title}>Тема</legend>
            <input name="topic" type="text" className={addLine.input} onChange={(e) => setTextTopic(e.target.value)} value={textTopic} />
            <legend className={addLine.title}>Английский</legend>
            <input name="english" type="text" className={addLine.input} onChange={(e) => setTextEnglish(e.target.value)} value={textEnglish} />
            <legend className={addLine.title}>Транскрипция</legend>
            <input name="transcription" type="text" className={addLine.input} onChange={(e) => setTextTranscription(e.target.value)} value={textTranscription} />
            <legend className={addLine.title}>Русский</legend>
            <input name="russian" type="text" className={addLine.input} onChange={(e) => setTextRussian(e.target.value)} value={textRussian} />
            <input className={addLine.button} type='submit' value='Добавить' />
        </form>
    )
}
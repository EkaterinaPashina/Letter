import React from 'react';
import addLine from "./AddLine.module.css";


export default function AddLine({ formData, setFormData, handleSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    return (
        <form className={addLine.addLine} onSubmit={handleSubmit}>
            <legend className={addLine.title}>Тема</legend>
            <input name="topic" type="text" className={addLine.input} onChange={handleChange} value={formData.topic} />
            <legend className={addLine.title}>Английский</legend>
            <input name="english" type="text" className={addLine.input} onChange={handleChange} value={formData.english} />
            <legend className={addLine.title}>Транскрипция</legend>
            <input name="transcription" type="text" className={addLine.input} onChange={handleChange} value={formData.transcription} />
            <legend className={addLine.title}>Русский</legend>
            <input name="russian" type="text" className={addLine.input} onChange={handleChange} value={formData.russian} />
            <input className={addLine.button} type='submit' value='Добавить' />
        </form>
    )
};
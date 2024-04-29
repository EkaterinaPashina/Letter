import React from 'react';
import main from './Main.module.css';
import dictionary from "../../data/Words";
import AddLine from "../../components/AddLine/AddLine";
import Table from '../../components/Table/Table';
import { useState } from 'react';

export default function Main() {
    const [defaultData, setDefaultData] = useState(dictionary);

    const initialFormData = {
        english: "",
        transcription: "",
        russian: "",
        topic: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const [textEmpty, setTextEmpty] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.english !== "" && formData.russian !== "" && formData.transcription !== "" && formData.topic !== "") {
            setDefaultData([...defaultData, { id: `${defaultData.length + 1}`, ...formData }]);
            setFormData(initialFormData); // Очистка полей после добавления
            setTextEmpty("");
        } else {
            setTextEmpty("Заполните все поля перед добавлением слова");
        }
    };

    const handleDelete = (id) => {
        setDefaultData(defaultData.filter(word => word.id !== id));
    };

    return (
        <>
            <AddLine formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            <p className={main.empty}>{textEmpty}</p>
            <Table defaultData={defaultData} onDelete={handleDelete} />
        </>
    )
}

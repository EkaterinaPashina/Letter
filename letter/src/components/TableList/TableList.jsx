import React, { useState, useContext } from 'react';
import { DataContext } from "../../context/DataContext";

import tableList from './TableList.module.css';

const WordListItem = ({ id, english, transcription, russian, tags, onDelete }) => {

    const [isEdited, setIsEdited] = useState(false);
    const { handleSave } = useContext(DataContext);

    const [value, setValue] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
    });

    const handleEdit = (e) => {
        switch (e.target.innerText) {
            case 'Редактировать':
                return setIsEdited(true);
            case 'Сохранить':
                handleSave(value, value.id);
                return setIsEdited(false);
            case 'Отменить':
                return [setValue({
                    id: id,
                    english: english,
                    transcription: transcription,
                    russian: russian,
                }), setIsEdited(false)];
            case 'Удалить':
                console.log("Удаление");
                break;
            default: console.log('Иное действие');
        }
    };

    function getValueEnglish(e) {
        setValue({
            ...value, english: e.target.value
        });
    }

    function getValueTranscription(e) {
        setValue({
            ...value, transcription: e.target.value
        });
    }

    function getValueRussian(e) {
        setValue({
            ...value, russian: e.target.value
        });
    }

    return (
        <tr onClick={handleEdit}>
            <td className={tableList.topic}>{tags}</td>
            {isEdited ? (
                <td className={tableList.topic}>
                    <input type="text" className={tableList.input} onChange={getValueEnglish} value={value.english} />
                </td>
            ) : (
                <td className={tableList.eng}>{value.english}</td>
            )}

            {isEdited ? (
                <td className={tableList.trans}>
                    <input type="text" className={tableList.input} onChange={getValueTranscription} value={value.transcription} />
                </td>
            ) : (
                <td className={tableList.trans}>{value.transcription}</td>
            )}

            {isEdited ? (
                <td className={tableList.rus}>
                    <input type="text" className={tableList.input} onChange={getValueRussian} value={value.russian} />
                </td>
            ) : (
                <td className={tableList.rus}>{value.russian}</td>
            )
            }

            <td className={tableList.button_line}>
                {
                    isEdited
                        ?
                        ((value.russian !== "" && value.transcription !== "" && value.english) ? (<button className={tableList.save}>Сохранить</button>) : (<button className={tableList.save} disabled >Сохранить</button>))
                        :
                        (<button className={tableList.edit}>Редактировать</button>)
                }

                {
                    isEdited ? (
                        <button className={tableList.exit}>Отменить</button>
                    ) : (
                        <button className={tableList.delete} onClick={() => onDelete(id)}>Удалить</button>
                    )
                }
            </td>
        </tr>
    )
}

export default WordListItem;


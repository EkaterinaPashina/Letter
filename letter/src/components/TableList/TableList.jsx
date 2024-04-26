import React, { useState } from 'react';

import tableList from './TableList.module.css';

const WordListItem = ({ english, transcription, russian, topic }) => {

    const [isEdited, setIsEdited] = useState(false);

    const [value, setValue] = useState({
        valueEnglish: english,
        valueTranscription: transcription,
        valueRussian: russian,
    });

    const handleEdit = (e) => {
        switch (e.target.innerText) {
            case 'Редактировать':
                return setIsEdited(true);
            case 'Сохранить':
                return setIsEdited(false);
            case 'Отменить':
                return [setValue({
                    valueEnglish: english,
                    valueTranscription: transcription,
                    valueRussian: russian,
                }), setIsEdited(false)];
            case 'Удалить':
                console.log("В процессе разработки");
                break;
            default: console.log('Иное действие');
        }
    };

    function getValueEnglish(e) {
        setValue({
            ...value, valueEnglish: e.target.value
        });
    }

    function getValueTranscription(e) {
        setValue({
            ...value, valueTranscription: e.target.value
        });
    }

    function getValueRussian(e) {
        setValue({
            ...value, valueRussian: e.target.value
        });
    }

    return (
        <tr onClick={handleEdit}>
            <td className={tableList.topic}>{topic}</td>
            {isEdited ? (
                <td className={tableList.topic}>
                    <input type="text" className={tableList.input} onChange={getValueEnglish} value={value.valueEnglish} />
                </td>
            ) : (
                <td className={tableList.eng}>{value.valueEnglish}</td>
            )}

            {isEdited ? (
                <td className={tableList.trans}>
                    <input type="text" className={tableList.input} onChange={getValueTranscription} value={value.valueTranscription} />
                </td>
            ) : (
                <td className={tableList.trans}>{value.valueTranscription}</td>
            )}

            {isEdited ? (
                <td className={tableList.rus}>
                    <input type="text" className={tableList.input} onChange={getValueRussian} value={value.valueRussian} />
                </td>
            ) : (
                <td className={tableList.rus}>{value.valueRussian}</td>
            )
            }

            <td className={tableList.button_line}>
                {
                    isEdited
                        ?
                        ((value.valueRussian !== "" && value.valueTranscription !== "" && value.valueEnglish) ? (<button className={tableList.save}>Сохранить</button>) : (<button className={tableList.save} disabled >Сохранить</button>))
                        :
                        (<button className={tableList.edit}>Редактировать</button>)
                }

                {
                    isEdited ? (
                        <button className={tableList.exit}>Отменить</button>
                    ) : (
                        <button className={tableList.delete}>Удалить</button>
                    )
                }
            </td>
        </tr>
    )
}

export default WordListItem;


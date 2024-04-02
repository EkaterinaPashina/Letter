import React from 'react';
import './table.css';
import dictionary from '../words/words';
import AddLine from '../addLine/addLine';

function Table() {
    return (
        <>
            <AddLine />
            <table className="table" border="1" border-collapse="collapse" align="center" cellSpacing="0">
                <tbody>
                    <tr>
                        <th className="table__title">Английский</th>
                        <th className="table__title">Транскрипция</th>
                        <th className="table__title">Русский</th>
                        <th className="table__title">Редактировать/Удалить</th>
                    </tr>
                    {dictionary.map((word) =>
                        <tr key={word.id}><td className="table__eng">{word.english}</td><td className="table__tr">{word.transcription}</td><td className="table__rus">{word.russian}</td><td className="table__button-line"><button className="table__edit">Редактировать</button><button className="table__delete">Удалить</button></td></tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Table;
import React from 'react';
import table from './Table.module.css';

export default function Table({ defaultData }) {
    return (
        <>
            <table className={table.table} border="1" border-collapse="collapse" align="center" cellSpacing="0">
                <tbody>
                    <tr>
                        <th className={table.title}>Английский</th>
                        <th className={table.title}>Транскрипция</th>
                        <th className={table.title}>Русский</th>
                        <th className={table.title}>Тема</th>
                        <th className={table.title + " " + table.title_edit}>Редактировать/Удалить</th>
                    </tr>
                    {defaultData.map((word) =>
                        <tr key={word.id}><td className={table.eng}>{word.english}</td><td className={table.trans}>{word.transcription}</td><td className={table.rus}>{word.russian}</td><td className={table.eng}>{word.topic}</td><td className={table.button_line}><button className={table.edit}>Редактировать</button><button className={table.delete}>Удалить</button></td></tr>)}
                </tbody>
            </table>
        </>
    )
}
import React from 'react';
import table from './Table.module.css';
import TableList from "../TableList/TableList";

export default function Table({ defaultData }) {

    return (
        <>
            <table className={table.table} border="1" border-collapse="collapse" align="center" cellSpacing="0">
                <thead>
                    <tr>
                        <th className={table.title}>Тема</th>
                        <th className={table.title}>Английский</th>
                        <th className={table.title}>Транскрипция</th>
                        <th className={table.title}>Русский</th>
                        <th className={table.title + " " + table.title_edit}>Редактировать/Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {defaultData.map((word) => (<TableList key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} topic={word.topic} />))}
                </tbody>
            </table>
        </>
    )
}
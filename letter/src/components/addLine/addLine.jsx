import React from 'react';
import "./addLine.css";

function AddLine() {
    return (
        <div className="addLine">
            <legend className="addLine__title">Английский</legend>
            <input type="text" className="addLine__input" />
            <legend className="addLine__title">Транскрипция</legend>
            <input type="text" className="addLine__input" />
            <legend className="addLine__title">Русский</legend>
            <input type="text" className="addLine__input" />
            <button className="addLine__button">Добавить</button>
        </div>
    )
}

export default AddLine;
import React from 'react';
import './titles.css';

export default class Titles extends React.Component {
    render() {
        return (
            <div className="titles">
                <ul className="titles__list">
                    <li className="titles__item">английский</li>
                    <li className="titles__item">транскрипция</li>
                    <li className="titles__item">русский</li>
                    <li className="titles__item">тема</li>
                </ul>
            </div>
        )
    }
}
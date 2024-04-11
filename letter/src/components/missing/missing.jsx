import React from 'react';
import './missing.css';
import { Link } from 'react-router-dom';

export default function Missing() {
    return (
        <>
            <h1 className="lostPage">Упс! Кажется, такой страницы не существует!</h1>
            <div className="lostPage__img">
                <img src="https://media.tenor.com/PGnGqfkIuLYAAAAM/cat-head.gif" alt="Грустный кот" />
            </div>
            <p className="lostPage__return">Попробуйте вернуться на {<Link to="/">Главную страницу</Link>}</p>
        </>
    )
}
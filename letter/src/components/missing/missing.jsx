import React from 'react';
import lostPage from './Missing.module.css';
import { Link } from 'react-router-dom';

export default function Missing() {
    return (
        <>
            <h1 className={lostPage.lostPage}>Упс! Кажется, такой страницы не существует!</h1>
            <div className={lostPage.img}>
                <img src="https://media.tenor.com/PGnGqfkIuLYAAAAM/cat-head.gif" alt="Грустный кот" />
            </div>
            <p className={lostPage.return}>Попробуйте вернуться на {<Link to="/Lettercd">Главную страницу</Link>}</p>
        </>
    )
}
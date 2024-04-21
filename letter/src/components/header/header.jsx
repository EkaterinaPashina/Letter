import React from 'react';
import Logo from '../logo/logo';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <nav>
                <ul className="header__list">
                    <li><Link to="/" className="header__list-item">Главная</Link></li>
                    <li><Link to="/cards" className="header__list-item">Карточки</Link></li>
                    <li><Link to="/game" className="header__list-item">Игра</Link></li>
                    <li><Link to="/vocabulary" className="header__list-item">Словарь</Link></li>
                </ul>
            </nav>
        </header>
    )
}
import React from 'react';
import Logo from '../Logo/Logo';
import header from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className={header.header}>
            <Logo />
            <nav>
                <ul className={header.list}>
                    <li><Link to="/Letter" className={header.list_item}>Главная</Link></li>
                    <li><Link to="/cards" className={header.list_item}>Карточки</Link></li>
                    <li><Link to="/game" className={header.list_item}>Игра</Link></li>
                    <li><Link to="/vocabulary" className={header.list_item}>Словарь</Link></li>
                </ul>
            </nav>
        </header>
    )
}
import React from 'react';
import Logo from '../logo/logo';
import './header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <nav>
                    <ul className="header__list">
                        <li><Link to="/" className="header__list-item">Главная</Link></li>
                        <li><Link to="/cards" className="header__list-item">Карточки</Link></li>
                        <li><Link to="/game" className="header__list-item">Игра</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
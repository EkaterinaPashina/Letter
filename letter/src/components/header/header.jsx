import React from 'react';
import Logo from '../logo/logo';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <nav>
                    <ul className="header__list">
                        <li><a className="header__list-item">Словарь</a></li>
                        <li><a className="header__list-item">Темы</a></li>
                        <li><a className="header__list-item">Карточки</a></li>
                    </ul>
                </nav>

                <div className="user">
                    <a className="user__log-in">Войти</a>
                    <a className="user__sign-up">Зарегистрироваться</a>
                </div>
            </header>
        )
    }
}
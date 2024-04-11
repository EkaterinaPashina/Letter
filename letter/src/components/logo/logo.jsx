import React from 'react';
import logo from './logo.png';
import './logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/">
            <div className="logo__container">
                <div className="logo__img">
                    <img className="logo__image" src={logo} alt="Logo" />
                </div>
            </div>
        </Link>
    )
}
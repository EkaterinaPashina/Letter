import React from 'react';
import logoImage from '../../assets/Logo.png';
import logo from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/">
            <div className={logo.container}>
                <div className={logo.img}>
                    <img className={logo.image} src={logoImage} alt="Logo" />
                </div>
            </div>
        </Link>
    )
}
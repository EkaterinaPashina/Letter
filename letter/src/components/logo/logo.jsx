import React from 'react';
import logo from './logo.png';
import './logo.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo__container">
                <div className="logo__img">
                    <img className="logo__image" src={logo} alt="Logo" />
                </div>
            </div>
        )
    }
}
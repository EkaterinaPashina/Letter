import React from 'react';
import translateButton from "./TranslateButton.module.css";

export default function TranslateButton({ innerRef, text }) {
    return (
        <button ref={innerRef} className={translateButton.translate_button}>{text}</button>
    )
}

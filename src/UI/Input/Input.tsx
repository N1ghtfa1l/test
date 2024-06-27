import React, { FC } from 'react';
import style from './Input.module.css'
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const Input:FC<Props> = (props) => {
    return (
        <input className={style.myInput} {...props}/>
    );
};

export default Input;
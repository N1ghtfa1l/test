import React  from 'react';
import style from './FormAddBtn.module.css';


const FormAddBtn = ({ onClick, children }) => {
    return (
        <button className={style.addBtn} onClick={onClick}>
            {children}
        </button>
    );
};

export default FormAddBtn;
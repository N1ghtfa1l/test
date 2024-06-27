import React, { FC } from 'react';
import style from './CartBtnDelete.module.css'

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const CartBtnDelete:FC<Props> = ({onClick, children }) => {
    return (
        <button onClick={onClick} className={style.deleteBtn}>
            {children}
            
        </button>
    );
};

export default CartBtnDelete;
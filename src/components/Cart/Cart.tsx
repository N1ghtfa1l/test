import React, { FC } from "react";
import './Cart.css'
import { IUser } from "../../types/types";
import CartBtnDelete from "../../UI/CartBtnDelete/CartBtnDelete";


interface Props {
  user: IUser,
  delete: Function,
}


const Cart:FC<Props> = ({user, delete: deleteUser}) => {
  function delet() {
    deleteUser(user)
  }
  return (
      <div className="cartBox">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149452.png"
          alt="UserPhoto"
          className="cartImg"
        />
        <div className="cartName">{user.name}</div>
        <div className="cartEmail">{user.email}</div>
        <div className="cartPhone">{user.phone}</div>
        <CartBtnDelete onClick={delet}>Удалить</CartBtnDelete>
      </div>
  );
};

export default Cart;

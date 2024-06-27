import React, { FC } from "react";
import Cart from "../Cart/Cart";
import { IUser } from "../../types/types";

interface Props {
  user: IUser[];
  setUser: Function;
}

const CartList: FC<Props> = ({ user, setUser }) => {
  function deleteUser(el: IUser) {
    setUser(user.filter((e: IUser) => e.id !== el.id));
  }
  return (
    <div>
      <div className="inner">
        {user.length > 0 ? (
          user.map((el) => <Cart key={el.id} user={el} delete={deleteUser} />)
        ) : (
          <p>загрузка</p>
        )}
      </div>
    </div>
  );
};

export default CartList;

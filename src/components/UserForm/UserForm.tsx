import React, { FC } from "react";
import { useState } from "react";
import { INewUser, IUser } from "../../types/types";
import './UserForm.css'
import FormAddBtn from "../../UI/FormAddBtn/FormAddBtn";
import Input from "../../UI/Input/Input";



interface Props {
    user: IUser[],
    setUser: Function,
}

const UserForm: FC<Props> = ({user, setUser}) => {
    const [newUser, setNewUser] = useState<INewUser>({
        id: Date.now(),
        name: "",
        email: "",
        phone: "",
      }); // объект
  function addUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUser([{ ...newUser }, ...user]);
    setNewUser({ id: Date.now(), name: "", email: "", phone: "" });
  }
  return (
    <div>
      <form className="form">
        <Input
          type="text"
          placeholder="Имя"
          value={newUser.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUser({ ...newUser, name: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUser({ ...newUser, email: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Телефон"
          value={newUser.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewUser({ ...newUser, phone: e.target.value })
          }
        />
         <FormAddBtn onClick={addUser}>Добавить</FormAddBtn>
      </form>
    </div>
  );
};

export default UserForm;

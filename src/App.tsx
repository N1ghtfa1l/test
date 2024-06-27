import React, { useEffect, useState } from "react";
import "./App.css";
import { IUser } from "./types/types";
import PostService from "./API/PostService";
import UserForm from "./components/UserForm/UserForm";
import CartList from "./components/CartList.jsx/CartList";

function App() {
  const [user, setUser] = useState<IUser[]>([]); // массив с сервера

  async function fetchUser() {
    const users = await PostService.getAll();
    setUser(users);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
      <CartList user={user} setUser={setUser} />
    </div>
  );
}

export default App;

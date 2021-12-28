import "./App.css";
import axios from "axios";
import { Registration } from "./components/Registration";
import { Header } from "./components/Header";

import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { UserListPage } from "./components/UserListPage";
import { useState } from "react";

function App() {
  // fetch user

  const [userData, setUserData] = useState({});

  const user = {
    username: "",
    password: "",
    name: "",
    age: 0,
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setUserData={setUserData} />}
        ></Route>
        <Route exact path="/registration" element={<Registration />}></Route>(
        <Route
          exact
          path="/user"
          element={<UserListPage userData={userData} />}
        ></Route>
        )
      </Routes>
    </>
  );
}

export default App;

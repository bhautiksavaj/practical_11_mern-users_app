import axios from "axios";
import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

export const Login = ({ setUserData }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMessage] = useState();

  const login = (event) => {
    event.preventDefault();
    axios.post("/api/login", { username, password }).then((data) => {
      console.log(data);
      // setUserData({ username, password });
      if (data?.data?.userList) {
        setUserData(data?.data?.userList);
        navigate("/user");
      } else {
        setMessage("wrong credential");
      }
    });
    // navigate("/user");
  };
  return (
    <>
      {/* <div>
        <label> Username</label>
        <input type="text" placeholder="username" />
        <br />
        <label> PassWord</label>
        <input type="text" placeholder="password" />
        <br />
        <button class="btn" onClick={login}>
          login
        </button>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {msg}
            <form onSubmit={login}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn btn-primary">login</button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

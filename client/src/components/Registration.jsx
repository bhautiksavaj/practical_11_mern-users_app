import React, { useState } from "react";
import axios from "axios";
export const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [msg, setMsg] = useState("");

  const registerUsers = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
      name: name,
      age: age,
    };

    axios
      .post("/api/registration", user)
      .then((res) => setMsg("user added successfully"));
  };
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          {msg}
          <form onSubmit={registerUsers}>
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
            <div className="mb-3">
              <label className="form-label">name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">age</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

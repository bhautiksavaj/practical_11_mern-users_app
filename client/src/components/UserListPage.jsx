import axios from "axios";
import React, { useEffect, useState } from "react";
// import "../../node_modules/bootstrap";

export const UserListPage = ({ userData }) => {
  // console.log(props);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("api/list").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  return (
    <>
      {console.log("props?.userData", userData)}
      {Object.keys(userData).length.length !== 0 && (
        <div className="container mt-5">
          <div className="row">
            <h1>users</h1>
            {users?.map((data, i) => (
              <div className="card m-3" key={i} style={{ width: "250px" }}>
                <div className="card-body">
                  <p className="card-text">Name: {data.name}</p>
                  <p className="card-text">Age: {data.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {Object.keys(userData).length.length !== 0 && (
        <div>sorry please login first</div>
      )}
      {/* </div> */}
    </>
  );
};

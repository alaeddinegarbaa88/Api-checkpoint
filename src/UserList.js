import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "200px",
        textShadow: "-10px -10px 50px rgba(0,0,0,0.8)",
      }}
      className="App"
    >
      {" "}
      {data.map((e) => (
        <div>name is : {e.name}</div>
      ))}
    </div>
  );
};

export default UserList;

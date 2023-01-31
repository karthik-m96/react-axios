import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Table() {
  const [table, setTable] = useState([]);

  useEffect(() => {but()}, []);

  async function but() {
    try {
      const {data} = await Axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      setTable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>This is the Axios Training</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
        {table.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

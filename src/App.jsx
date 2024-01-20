import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUser = async (api) => {
    try {
      const response = await fetch(api);
      // const data = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      // setUsers(data);
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            {/* <th>address</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, email } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{email}</td>
                {/* <td>{address}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

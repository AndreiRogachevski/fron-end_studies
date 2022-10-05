import { useEffect, useState } from "react";
export default function Auth(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      (async () => {
      const responce = await fetch("http://192.168.0.148:3000/users");
      const json = await responce.json();
      setUsers(json);
    })();
  }, []);
  return (<div>
      <h1>Выберите пользователя:</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user}>
              {user.name}
              <img src={user.avatar} alt="avatar" />
              <button onClick={() => props.onSelectUser(user)}>
                Select user
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

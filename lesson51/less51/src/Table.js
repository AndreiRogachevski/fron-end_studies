export default function Table(props) {
  const users = props.users;
  function select(id) {
    props.onSelectUser(id);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr
              className={props.select === user.id ? 'select' : ''}
              key={user.id}
              onClick={() => {
                select(user.id);
              }}
            >
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

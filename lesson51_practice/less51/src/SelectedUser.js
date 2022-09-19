import { useState, useEffect, Fragment } from 'react';
export default function SelectedUser(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    setIsLoad(true);
    async function loadData() {
      const respons = await fetch('http://dummyjson.com/users/' + props.userId);
      const json = await respons.json();
      setUser(json);
      setIsLoad(false);
    }
    if (props.userId) {
      loadData();
    }
  }, [props.userId]);
  return (
    <Fragment>
      {isLoad || (
        <Fragment>
          <img src={user.image} alt="img" />
          <ul>
            <li>{user.id}</li>
            <li>{user.firstName}</li>
            <li>{user.age}</li>
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
}

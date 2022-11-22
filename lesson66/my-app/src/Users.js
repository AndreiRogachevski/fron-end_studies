import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
export default function Users() {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://reqres.in/api/users/?page=${page}&per_page=${perPage}`
      );
      const json = await response.json();
      setUsers(json);
      setTotalPages(json.total_pages);
    })();
  }, [setUsers, page, perPage]);
  function userDel(id) {
    (async () =>
      await fetch('https://reqres.in/api/users/' + id, {
        method: 'DELETE',
      }).then((res) => console.log(res)))();
  }
  function changePage(int) {
    if (page + int > totalPages) {
      setPage(1);
    } else if (page + int < 1) {
      setPage(totalPages);
    } else {
      setPage((currentPage) => currentPage + int);
    }
  }
  return (
    <>
      <div>
        <label htmlFor="per_page">{perPage}</label>
        <input
          type="range"
          name="per_page"
          id="per_page"
          value={perPage}
          min="2"
          max="12"
          step="2"
          onChange={(e) => setPerPage(e.target.value)}
        />
        <Button
          totalPages={totalPages}
          setNewPage={(i) => setPage(i)}
          switchPage={(int) => changePage(int)}
        />
        <Link to={'/form'}>Add new User</Link>
      </div>
      <div className="users">
        {users &&
          users.data.map((user) => (
            <div key={user.id}>
              <p>
                <strong>{user.first_name + ' ' + user.last_name}</strong>
                <button onClick={() => userDel(user.id)}>delete</button>
              </p>
              <a href={`mailto:${user.email}`}>{user.email}</a>
              <Link to={`${user.id}`}>
                <img src={user.avatar} alt="avatar" />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

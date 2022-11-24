import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getAllUsers } from './APIs';
import Button from './Button';
import RangePerPage from './RangePerPage';

export default function Users({ totalUsers }) {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    getAllUsers(page, perPage).then((users) => {
      setUsers(users);
      setTotalPages(users.total_pages);
      totalUsers(users.total);
    });
  }, [setUsers, page, perPage]);
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
        <RangePerPage perPage={perPage} setPerPage={setPerPage} />
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
            <div className="user" key={user.id}>
              <p>
                <Link to={`${user.id}`}>
                  <strong>{user.first_name + ' ' + user.last_name}</strong>
                </Link>
                <button onClick={() => deleteUser(user.id)}>☠️</button>
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

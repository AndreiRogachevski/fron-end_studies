import { useEffect, useState } from 'react';
import SingUpForm from './registration/SingUpForm';
import LogInForm from './registration/LogInForm';
import { useSelector } from 'react-redux';
import { userInfo } from '../store/userSlice';

export default function Header() {
  const [singForm, setSingForm] = useState(false);
  const [logForm, setLogForm] = useState(false);
  const user = useSelector(userInfo);
  useEffect(() => {
    if (user) {
      setSingForm(false);
      setLogForm(false);
    }
  }, [user]);
  return (
    <>
      {(singForm && <SingUpForm closeForm={(s) => setSingForm(s)} />) ||
        (logForm && <LogInForm />)}
      <header className="d-flex justify-content-between container">
        <a href="/products/wishlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </a>
        <div className="col-md-4 text-end">
          {user.length && (
            <span className="m-3 h4 text-primary">{user.name}</span>
          )}
          <button
            type="button"
            className={
              'btn me-2 ' + (logForm ? 'btn-primary' : 'btn-outline-primary')
            }
            onClick={() => {
              setLogForm(!logForm);
              setSingForm(false);
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={
              'btn ' + (singForm ? 'btn-primary' : 'btn-outline-primary')
            }
            onClick={() => {
              setSingForm(!singForm);
              setLogForm(false);
            }}
          >
            Sign-up
          </button>
        </div>
      </header>
    </>
  );
}

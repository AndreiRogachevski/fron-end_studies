import { useEffect, useState } from 'react';
import SingUpForm from './registration/SingUpForm';
import LogForm from './registration/LogForm';
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
        (logForm && <LogForm />)}
      <header className="d-flex justify-content-end container">
        <div className="col-md-4 text-end">
          <span className="m-3 h4">
            Welcome, <span className="text-primary">{user.name}</span>!
          </span>
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

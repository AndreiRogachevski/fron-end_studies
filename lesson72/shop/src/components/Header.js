import { useState } from 'react';
import SingUpForm from './registration/SingUpForm';

export default function Header() {
  const [singForm, setSingForm] = useState(false);
  const [logForm, setLogForm] = useState(false);
  return (
    <>
      {singForm && <SingUpForm />}
      <header className="d-flex justify-content-end container">
        <div className="col-md-3 text-end">
          <button
            type="button"
            className={
              'btn me-2 ' + (singForm ? 'btn-primary' : 'btn-outline-primary')
            }
            onClick={() => {
              setLogForm(!logForm);
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
            }}
          >
            Sign-up
          </button>
        </div>
      </header>
    </>
  );
}

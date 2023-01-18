import { useState } from 'react';

export default function LogForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  function formSubmit(e) {}
  return (
    <form className="sing-up-form" onSubmit={formSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-info" value="Sing Up" />
      </div>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

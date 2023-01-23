import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsApi } from '../../api/products';
import { setUser } from '../../store/userSlice';

export default function LogInForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  function formSubmit(e) {
    e.preventDefault();
    productsApi
      .login({ email, password })
      .then((res) => {
        localStorage.clear();
        localStorage.setItem('token', res.data.access_token);
        dispatch(setUser(res.data.user));
        setErrors([]);
      })
      .catch((res) => {
        setErrors(...Object.values(res.response.data.errors));
      });
  }
  return (
    <div className="log-in-container">
      <form className="log-in-form" onSubmit={formSubmit}>
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
          <input type="submit" className="btn btn-info" value="Log In" />
        </div>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

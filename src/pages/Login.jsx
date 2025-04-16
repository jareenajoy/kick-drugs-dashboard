import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import dummyUsers from '../data/users';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation
    if (!form.username.trim()) {
      setError('Username is required');
      return;
    }

    if (!form.password.trim()) {
      setError('Password is required');
      return;
    }

    const user = dummyUsers[form.username];
    if (user && user.password === form.password) {
      dispatch(login(user));
      navigate(user.role === 'super' ? '/dashboard' : '/analytics');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
              if (error) setError('');
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              if (error) setError('');
            }}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        {error && <div className="alert alert-danger mt-3 mb-0 p-2 text-center">{error}</div>}
      </div>
    </div>
  );
}

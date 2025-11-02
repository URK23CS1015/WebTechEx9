import React, { useState } from 'react';
import axios from 'axios';

const inputStyle = {
  width: '100%',
  padding: 10,
  margin: '8px 0',
  borderRadius: 4,
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  fontSize: 16,
};

const buttonStyle = {
  width: '100%',
  padding: 12,
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 18,
  marginTop: 10,
};

const messageStyle = {
  marginTop: 15,
  padding: 10,
  borderRadius: 4,
  color: 'white',
  backgroundColor: '#dc3545',
};

const Login = () => {
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post('https://web-tech-ex9.vercel.app/api/auth/login', form);
      setMessage(res.data.message);
      // Store token if needed: localStorage.setItem('token', res.data.token)
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: 20, borderRadius: 8, backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
      <input style={inputStyle} name="usernameOrEmail" placeholder="Username or Email" value={form.usernameOrEmail} onChange={onChange} required />
      <input style={inputStyle} name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
      <button style={buttonStyle} type="submit">Login</button>
      {message && <p style={messageStyle}>{message}</p>}
    </form>
  );
};

export default Login;

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
  backgroundColor: '#28a745',
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

const Register = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setMessage('');
    if (form.password !== form.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('https://web-tech-ex9.vercel.app/api/auth/register', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: 20, borderRadius: 8, backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Register</h2>
      <input style={inputStyle} name="full_name" placeholder="Full Name" value={form.full_name} onChange={onChange} required />
      <input style={inputStyle} name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <input style={inputStyle} name="username" placeholder="Username" value={form.username} onChange={onChange} required />
      <input style={inputStyle} name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
      <input style={inputStyle} name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={onChange} required />
      <button style={buttonStyle} type="submit">Register</button>
      {message && <p style={messageStyle}>{message}</p>}
    </form>
  );
};

export default Register;

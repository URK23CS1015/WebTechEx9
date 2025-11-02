import React from 'react';
import Register from './Register';
import Login from './Login';

const buttonStyle = {
  padding: '10px 20px',
  marginBottom: 20,
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: 5,
  fontSize: 16,
};

function App() {
  const [showLogin, setShowLogin] = React.useState(true);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Online Donation Platform</h1>
      <button style={buttonStyle} onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Go to Register' : 'Go to Login'}
      </button>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;

import React from 'react';
import Register from './Register';
import Login from './Login';

function App() {
  const [showLogin, setShowLogin] = React.useState(true);
  
  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Online Donation Platform</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Go to Register' : 'Go to Login'}
      </button>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;

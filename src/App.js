import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
<div className="login">
<h2 className="login-title">Login</h2>
<form className="login-form" onSubmit={handleLogin}>
  <div className="form-group">
  <label for="Username">Username</label>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  </div>
  <div className="form-group">
  <label for="Password">Password</label>
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  </div>
  <button className="submit" type="submit">Login</button>
</form>
</div>
  );
}
export default App;

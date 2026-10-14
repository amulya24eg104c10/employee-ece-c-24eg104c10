import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login - use your roll number
    if (username === '24EG104C10' && password === 'amulya') {
      onLogin();
    } else if (username && password) {
      // Allow any non-empty for demo
      onLogin();
    } else {
      alert('Enter username and password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5ff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '90%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>camp<span style={{ color: '#e94057' }}>X</span></h1>
        <h2 style={{ textAlign: 'center' }}>Welcome back</h2>
        <p style={{ textAlign: 'center', color: 'gray' }}>Sign in to continue to <b style={{ color: 'black' }}>ANURAG UNIVERSITY</b></p>
        
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: 'bold' }}>*Username or email</label>
          <input 
            type="text" 
            placeholder="Enter username or email"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #7c6fbe', margin: '8px 0 15px', boxSizing: 'border-box' }}
          />
          <label style={{ fontWeight: 'bold' }}>*Password</label>
          <input 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', background: '#f2f2f2', margin: '8px 0 20px', boxSizing: 'border-box' }}
          />
          <button type="submit" style={{ width: '100%', padding: '14px', background: '#2e1a8a', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold' }}>
            Sign in
          </button>
        </form>

        <p style={{ textAlign: 'right', color: '#2e1a8a', marginTop: '10px' }}>Forgot password?</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'gray', margin: '20px 0' }}>
          <hr style={{ flex: 1 }} /> or <hr style={{ flex: 1 }} />
        </div>

        <button style={{ width: '100%', padding: '12px', background: '#f5f5f5', border: 'none', borderRadius: '12px', marginBottom: '10px' }}>G Sign in with Google</button>
        <button style={{ width: '100%', padding: '12px', background: '#f5f5f5', border: 'none', borderRadius: '12px' }}>Microsoft Sign in with Microsoft</button>

        <p style={{ textAlign: 'center', fontSize: '12px', color: 'gray', marginTop: '15px' }}>Hint: Username: 24EG104C10 Password: amulya</p>
      </div>
    </div>
  );
}

export default Login;
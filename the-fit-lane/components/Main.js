import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <main>
      <div className="login-container">
        <h1>Sign into your Fit Lane Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-image: url('/male shoes.png');
          background-size: cover;
          background-position: center;
        }
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 10px;
        }
        h1 {
          margin-bottom: 20px;
          font-size: 2rem;
        }
        label {
          margin-bottom: 5px;
        }
        input {
          height: 30px;
          padding: 5px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: none;
        }
        button {
          background-color: #0070f3;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0060d3;
        }
      `}</style>
    </main>
  );
};

export default LoginPage;

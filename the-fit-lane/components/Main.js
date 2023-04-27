import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Image
          className='logo'
          src="/FitLaneLogo 1.svg"
          alt='logo'
          width={200}
          height={150}
        />
        <h5>Sign into your Fit Lane Account</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label> <br/>
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

          <Link href="">Forgot Password?</Link>

          <p>Click Here to <Link href="">Create an Account.</Link></p>

        </form>
      </div>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height:90vh;
          background-image: url('/female Sports bra.png');
          background-size: cover;
          background-position: center;
        }
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 30%;
          min-height: 80%;
          padding: 20px;
          background-color:black;
          color: white;
          border-radius: 10px;
        }
        h5 {
          margin-bottom: 20px;
          margin-top: 20px;
          font-size: 1rem;
        }
        label {
          margin-bottom: 5px;
        }
        input {
            width: 100%;
          height: 30px;
          padding: 5px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: none;
        }
        button {
          background-color: #0070f3;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #fff;
          padding: 10px 20px;
          width: 100%;
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

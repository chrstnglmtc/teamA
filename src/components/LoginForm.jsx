import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ onForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <form onSubmit={handleLogin} className="template-form">
    <h2>Sign in on your account.</h2>
    <h2>Be part of the success.</h2>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div>
        <h3>By clicking "Sign in," you agree to our Terms of Use and our Privacy Policy.</h3>
      </div>
      <Link to="/forgot">
        <div className="forgot-password">
          Forgot your password?
        </div>
      </Link>
      <button type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;

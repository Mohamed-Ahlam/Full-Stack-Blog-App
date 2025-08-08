import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>

      <form className="form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button className="primary--btn">Login</button>
        <p>This is an error</p>
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  );
}

export default Login
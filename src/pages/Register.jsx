import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>

      <form className="form">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" />
        <button className="primary--btn">Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center mb-2">Register</h1>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Register</button>
        <div className="text-center py-2 text-gray-500">
          Do you have an account?
          <Link className="underline text-blue-600" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

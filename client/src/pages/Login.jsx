import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center mb-2">Login</h1>
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet?
          <Link className="underline text-blue-600" to="/register">
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

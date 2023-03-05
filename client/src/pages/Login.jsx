import { useState } from "react";
import { Link } from "react-router-dom";
import {login} from "../Utils"
const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login("/login",formData)
    // dispatch(register(formData));
  };
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center mb-2">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button className="primary" type="submit">Login</button>
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

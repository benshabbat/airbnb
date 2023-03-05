import { useState } from "react";
import { Link } from "react-router-dom";
import {register} from "../Utils"
const Register = () => {
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
    register("/register",formData)
    // dispatch(register(formData));
  };
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center mb-2">Register</h1>
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="username"
          onChange={handleChange}
          required
        />
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
        <button className="primary" type="submit">Register</button>
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

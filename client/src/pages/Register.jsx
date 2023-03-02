import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center mb-2">Register</h1>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
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

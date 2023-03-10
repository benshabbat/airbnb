import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Utils";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  // const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await login(formData);
      console.log("before login",data);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      // setUser(data)
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: err.response.data });
    }
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
        <button disabled={loading} className="primary" type="submit">
          Login
        </button>
        {error && <span>{error.message}</span>}
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../Utils";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const {loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
        const res = await login("/api/auth/login", formData);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        navigate("/")
    }catch(err)
    {
        dispatch({type:"LOGIN_FAIL",payload:err.response.data})
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
        <button className="primary" type="submit">
          Login
        </button>
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

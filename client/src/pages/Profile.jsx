import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../Utils";
import { useNavigate } from "react-router-dom";
const Profile = ({ user }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className="text-center m-w-lg mx-auto">
      Logged in as {user.username} ({user.email})<br />
      <button className="primary max-w-sm mt-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;

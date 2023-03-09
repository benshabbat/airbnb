import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { logout } from "../Utils";
const Account = () => {
  const { user,dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  
  if (!user) {
    <Navigate to="/login" />;
  }

  let { sub } = useParams();
  if (sub === undefined) {
    sub = "profile";
  }
  const linkClasses = (type) => {
    let classes = "py-2 px-6";
    if (type === sub) classes += " bg-red-700 text-white rounded-full";
    return classes;
  };
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accommodations
        </Link>
      </nav>
      {sub === "profile" && (
        <div className="text-center m-w-lg mx-auto">
          Logged in as {user.username} ({user.email})<br />
          <button className="primary max-w-sm mt-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;

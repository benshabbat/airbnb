import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Account = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    <Navigate to="/login" />;
  }
  return (
    <div>
      <nav className="w-full flex mt-4">
        <Link className="p-2 bg-gray-400 rounded-full" to={"/account/"}>My Profile</Link>
        <Link className="p-2" to={"/account/bookings"}>My Bookings</Link>
        <Link className="p-2" to={"/account/places"}>My Accommodations</Link>
      </nav>
    </div>
  );
};

export default Account;

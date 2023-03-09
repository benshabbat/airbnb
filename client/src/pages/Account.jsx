import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate,Outlet } from "react-router-dom";

const Account = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    <Navigate to="/login" />;
  }
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className="py-2 px-6 bg-red-700 text-white rounded-full" to={"/account"}>My Profile</Link>
        <Link className="py-2 px-6" to={"bookings"}>My Bookings</Link>
        <Link className="py-2 px-6" to={"places"}>My Accommodations</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Account;

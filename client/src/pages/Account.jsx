import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";

import Places from "./Places";
import Profile from "./Profile";
const Account = () => {
  const { user } = useContext(AuthContext);

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
      {sub === "profile" && <Profile user={user} />}
      {sub === "places" && <Places />}
    </div>
  );
};

export default Account;

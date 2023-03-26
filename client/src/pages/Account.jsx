import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useParams } from "react-router-dom";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
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
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full ";
    if (type === sub) {
      classes += " bg-red-700 text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  };
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          <AiOutlineUser className="h-6 w-6" />
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          <AiOutlineUnorderedList className="h-6 w-6" />
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          <HiOutlineHomeModern className="h-6 w-6" />
          My Accommodations
        </Link>
      </nav>
      {sub === "profile" && <Profile user={user} />}
      {sub === "places" && <Places user={user} />}
    </div>
  );
};

export default Account;

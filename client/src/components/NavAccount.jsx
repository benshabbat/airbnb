import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
const NavAccount = () => {
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
  );
};

export default NavAccount;

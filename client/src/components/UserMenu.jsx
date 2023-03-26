import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineUser } from "react-icons/ai";
import { BsList } from "react-icons/bs";
const UserMenu = () => {
  const { user } = useContext(AuthContext);
  console.log("after login", user);
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-full px-4 py-2">
      <BsList className="h-6 w-6" />
      <Link
        to={user ? "/account" : "/login"}
        className="bg-gray-400 rounded-full text-white border border-gray-400 overflow-hidden"
      >
        <AiOutlineUser className="h-6 w-6 relative top-1" />
      </Link>
      {!!user && <div>{user.username}</div>}
    </div>
  );
};

export default UserMenu;

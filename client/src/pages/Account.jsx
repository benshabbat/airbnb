import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useParams } from "react-router-dom";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import NavAccount from "../components/NavAccount";
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
  return (
    <div>
      <NavAccount />
      {sub === "profile" && <Profile user={user} />}
      {sub === "places" && <Places user={user} />}
    </div>
  );
};

export default Account;

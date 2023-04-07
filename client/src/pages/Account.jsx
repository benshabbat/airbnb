import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";
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
      {sub === "bookings" && <Bookings user={user} />}
    </div>
  );
};

export default Account;

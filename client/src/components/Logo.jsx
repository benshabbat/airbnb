import React from "react";
import { Link } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";
const Logo = () => {
  return (
    <Link to="/" className="flex item-center gap-1 text-red-700">
      <FaAirbnb className="h-8 w-8" />
      <span className="font-bold text-xl">airbnb</span>
    </Link>
  );
};

export default Logo;

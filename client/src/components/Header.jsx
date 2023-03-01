import React from "react";
import Logo from "./Logo";
import SearchWidget from "./SearchWidget";
const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <Logo />
      <SearchWidget />
      <div className="flex gap-2 border border-gray-300 rounded-full px-4 py-2"></div>
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "./Logo";
import SearchWidget from "./SearchWidget";
import UserMenu from "./UserMenu";
const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <Logo />
      <SearchWidget />
      <UserMenu/>
    </header>
  );
};

export default Header;

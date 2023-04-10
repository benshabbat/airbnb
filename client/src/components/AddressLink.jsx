import React from "react";
import { BiMap } from "react-icons/bi";
const AddressLink = ({ address }) => {
  return (
    <a
      className="flex gap-1 my-3 font-semibold underline "
      target="_blank"
      href={"https://maps.google.com/?q=" + address}
    >
      <BiMap className="h-6" />
      {address}
    </a>
  );
};

export default AddressLink;

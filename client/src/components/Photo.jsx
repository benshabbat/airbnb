import React from "react";
import { BsTrash } from "react-icons/bs";

const Photo = ({ link, index }) => {
  return (
    <div key={index} className="flex h-32 ">
      <img
        className="rounded-2xl w-full object-cover"
        src={"http://localhost:8080/api/uploads/" + link}
      />
      <BsTrash />
    </div>
  );
};

export default Photo;

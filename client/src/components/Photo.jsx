import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "./Image";
const Photo = ({ photos, setPhotos }) => {
  const removePhoto = (e, link) => {
    e.preventDefault();
    setPhotos([...photos.filter((selectedName) => selectedName !== link)]);
  };
  const selectMainPhoto = (e, link) => {
    e.preventDefault();
    setPhotos([
      link,
      ...photos.filter((selectedName) => selectedName !== link),
    ]);
  };
  return photos.map((link, index) => {
    return (
      <div key={index} className="flex h-32 relative">
        <Image className="rounded-2xl w-full object-cover" src={link} />

        <button
          onClick={(e) => removePhoto(e, link)}
          className="absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-1 cursor-pointer"
        >
          <FaTrashAlt />
        </button>
        <button
          onClick={(e) => selectMainPhoto(e, link)}
          className="absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl p-1 cursor-pointer"
        >
          {link === photos[0] ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
    );
  });
};

export default Photo;

import React, { useState } from "react";
import { RiGridFill } from "react-icons/ri";
import Image from "../components/Image";
import { AiFillCloseCircle } from "react-icons/ai";

const PhotosForPlacePage = ({ photos }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white min-h-screen">
        <div className="p-8 grid gap-4">
          <button
            className="fixed py-2 px-4 rounded-2xl bg-white text-black"
            onClick={() => setShowAllPhotos(!showAllPhotos)}
          >
            <AiFillCloseCircle className="h-8 w-8" />
          </button>
          {photos?.map((photo, index) => {
            return <Image key={index} src={photo} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] ">
        <div>
          <Image
            className="object-cover aspect-square rounded-2xl"
            src={photos?.[0]}
          />
        </div>
        <div className="grid">
          <Image
            className="object-cover aspect-square rounded-2xl"
            src={photos?.[1]}
          />
          <div className="overflow-hidden">
            <Image
              className="object-cover aspect-square relative top-2 rounded-2xl"
              src={photos?.[2]}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(!showAllPhotos)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl border border-black "
      >
        <RiGridFill /> Show all photos
      </button>
    </div>
  );
};

export default PhotosForPlacePage;

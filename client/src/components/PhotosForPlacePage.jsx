import React, { useState } from "react";
import Image from "../components/Image";
import { AiFillCloseCircle, AiFillPicture } from "react-icons/ai";

const PhotosForPlacePage = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className=" bg-black p-8 grid gap-4">
          <h2 className="text-3xl mr-36">Photos of {place?.title}</h2>
          <button
            className="fixed right-8 top-8 py-2 px-4 rounded-2xl bg-gray-200 text-black"
            onClick={() => setShowAllPhotos(!showAllPhotos)}
          >
            <AiFillCloseCircle className="h-8 w-8" />
          </button>
          {place?.photos?.map((photo, index) => {
            return <Image key={index} src={photo} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden ">
        <div>
          {place?.photos?.[0] && (
            <Image
              className="object-cover aspect-square cursor-pointer "
              src={place?.photos?.[0]}
              onClick={() => setShowAllPhotos(!showAllPhotos)}
            />
          )}
        </div>
        <div className="grid">
          {place?.photos?.[1] && (
            <Image
              className="object-cover aspect-square cursor-pointer "
              src={place?.photos?.[1]}
              onClick={() => setShowAllPhotos(!showAllPhotos)}
            />
          )}
          <div className="overflow-hidden">
            {place?.photos?.[2] && (
              <Image
                className="object-cover aspect-square relative top-2 cursor-pointer "
                src={place?.photos?.[2]}
                onClick={() => setShowAllPhotos(!showAllPhotos)}
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(!showAllPhotos)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl border border-black "
      >
        <AiFillPicture className="h-6" /> Show all photos
      </button>
    </div>
  );
};

export default PhotosForPlacePage;

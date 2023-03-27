import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadImageByLink, uploadImages } from "../Utils";
import Photo from "./Photo";
const UploadPhotos = ({ setPhotos, photos }) => {
  const [photoLink, setPhotoLink] = useState("");
  const addPhotoLink = async (e) => {
    e.preventDefault();
    console.log(photoLink);
    const { data } = await uploadImageByLink({ link: photoLink });
    console.log(data);
    setPhotos((prev) => {
      return [...prev, data];
    });
    // setFormData((prevState) => ({ ...prevState, photos }));
    setPhotoLink("");
    // setFormData((prevState) => ({
    //   ...prevState,
    //   photos: [...photos, data],
    // }));

    console.log(photos);
    // console.log(formData);
  };
  const uploadPhoto = async (e) => {
    const { files } = e.target;
    console.log(files);
    const fData = new FormData();
    for (let i = 0; i < files.length; i++) {
      fData.append("photos", files[i]);
    }
    const { data } = await uploadImages(fData);
    setPhotos((prev) => {
      return [...prev, ...data];
    });
    // setFormData((prevState) => ({ ...prevState, photos }));
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link ...jpg"
          name="photos"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button className="bg-gray-200 px-4 rounded-2xl" onClick={addPhotoLink}>
          Add Photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {photos.length > 0 &&
          photos.map((link, index) => {
            return <Photo key={index} link={link} />;
          })}
        <label className="flex h-32 item-center justify-center  gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={uploadPhoto}
            multiple
          />
          <AiOutlineCloudUpload className="h-6 w-6" />
          Upload
        </label>
      </div>
    </>
  );
};

export default UploadPhotos;

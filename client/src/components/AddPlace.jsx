import React, { useState } from "react";
import { uploadImageByLink, uploadImages } from "../Utils";
import Perks from "./Perks";
import { AiOutlineCloudUpload } from "react-icons/ai";
const AddPlace = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    photos: [],
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });
  const [photoLink, setPhotoLink] = useState("");
  const [photos, setPhotos] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const preInput = (header, desc) => {
    return (
      <>
        <h2 className="text-xl mt-4">{header}</h2>
        <p className="text-gray-500 text-sm">{desc}</p>
      </>
    );
  };

  const addPhotoLink = async (e) => {
    e.preventDefault();
    console.log(photoLink);
    const { data } = await uploadImageByLink({ link: photoLink });
    console.log(data);
    setPhotos((prev) => {
      return [...prev, data];
    });
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
  };
  return (
    <div>
      {/* <h1 className="text-4xl text-center mb-2">Add Place</h1> */}
      <form onSubmit={onSubmit}>
        {preInput("Title", "Title for your place")}
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          // required
        />
        {preInput("Address", "Address for this place")}
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          // required
        />
        {preInput("Photos", "more is better")}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add using a link ...jpg"
            name="photos"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
            // onChange={handleChange}
            // required
          />
          <button
            className="bg-gray-200 px-4 rounded-2xl"
            onClick={addPhotoLink}
          >
            Add Photo
          </button>
        </div>
        <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {photos.length > 0 &&
            photos.map((link, index) => {
              return (
                <div key={index}>
                  <img
                    className="rounded-2xl"
                    src={"http://localhost:8080/api/uploads/" + link}
                  />
                </div>
              );
            })}
          <label className="flex item-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer">
            <input type="file" className="hidden" onChange={uploadPhoto} multiple />
            <AiOutlineCloudUpload />
            Upload
          </label>
        </div>
        {preInput("Description", "Description of the place")}
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          // required
        />
        {preInput("Perks", "Select all the perks of your place")}
        <Perks handleChange={handleChange} />
        {preInput("Extra Info", "House rules, etc")}
        <textarea
          type="text"
          placeholder="extraInfo"
          name="extraInfo"
          onChange={handleChange}
          // required
        />
        {preInput("Check In & Check out", "Add check in and out")}
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2">Check In time</h3>
            <input
              type="number"
              placeholder="14:00"
              name="checkIn"
              onChange={handleChange}
              // required
            />
          </div>
          <div>
            <h3 className="mt-2">Check Out time</h3>
            <input
              type="number"
              placeholder="checkOut"
              name="checkOut"
              onChange={handleChange}
              // required
            />
          </div>
          <div>
            <h3 className="mt-2">Max number of guests</h3>
            <input
              type="number"
              placeholder="maxGuests"
              name="maxGuests"
              onChange={handleChange}
              // required
            />
          </div>
        </div>
        <button className="primary" type="submit">
          Add Place
        </button>
      </form>
    </div>
  );
};

export default AddPlace;

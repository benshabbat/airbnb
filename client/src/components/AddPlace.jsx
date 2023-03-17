import React, { useState } from "react";
import {uploadImage} from "../Utils"
import Perks from "./Perks";
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
  const [photoLink, setPhotoLink] = useState("")
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

  const addPhotoLink = async()=>{
    await uploadImage(photoLink)
  }
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
          required
        />
        {preInput("Address", "Address for this place")}
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          required
        />
        {preInput("Photos", "more is better")}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add using a link ...jpg"
            name="photos"
            onChange={handleChange}
            required
          />
          <button className="bg-gray-200 px-4 rounded-2xl">Add Photo</button>
        </div>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </button>
        </div>
        {preInput("Description", "Description of the place")}
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          required
        />
        {preInput("Perks", "Select all the perks of your place")}
        <Perks handleChange={handleChange}/>
        {preInput("Extra Info", "House rules, etc")}
        <textarea
          type="text"
          placeholder="extraInfo"
          name="extraInfo"
          onChange={handleChange}
          required
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
              required
            />
          </div>
          <div>
            <h3 className="mt-2">Check Out time</h3>
            <input
              type="number"
              placeholder="checkOut"
              name="checkOut"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h3 className="mt-2">Max number of guests</h3>
            <input
              type="number"
              placeholder="maxGuests"
              name="maxGuests"
              onChange={handleChange}
              required
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

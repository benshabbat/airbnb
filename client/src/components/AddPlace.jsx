import React, { useState } from "react";
import Perks from "./Perks";
import UploadPhotos from "./UploadPhotos";
import { createPlace } from "../Utils";
import { useNavigate } from "react-router-dom";
const AddPlace = ({user}) => {
  const [photos, setPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    photos,
    description: "",
    perks,
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await createPlace(formData,user._id);
    navigate("/account/places")
  };

  const preInput = (header, desc) => {
    return (
      <>
        <h2 className="text-xl mt-4">{header}</h2>
        <p className="text-gray-500 text-sm">{desc}</p>
      </>
    );
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
        <UploadPhotos setPhotos={setPhotos} photos={photos} />
        {preInput("Description", "Description of the place")}
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          // required
        />
        {preInput("Perks", "Select all the perks of your place")}
        <Perks selected={perks} setPerks={setPerks} />
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

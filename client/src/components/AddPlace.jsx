import React, { useState, useEffect } from "react";
import Perks from "./Perks";
import UploadPhotos from "./UploadPhotos";
import { createPlace, updatePlace } from "../Utils";
import { useNavigate, useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
const AddPlace = ({ user, place }) => {
  const { action } = useParams();
  const [photos, setPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  useEffect(() => {
    if (action === place?._id) {
      const fetchData = async () => {
        const { data } = await getPlaceById(place?._id);
        setPhotos(data.photos);
        setPerks(data.perks);
        setFormData(data);
      };
      fetchData();
    }
  }, [place?._id]);

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    // photos,
    description: "",
    // perks,
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
    price: 100,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      photos,
      perks,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "new") {
      await createPlace(formData, user._id);
    } else {
      await updatePlace({ ...formData, photos, perks }, action);
    }
    navigate("/account/places");
  };

  const preInput = (header, desc) => {
    return (
      <>
        <h2 className="text-xl mt-4">{header}</h2>
        <p className="text-gray-500 text-sm">{desc}</p>
      </>
    );
  };
  const inputData = (type, name) => {
    return (
      <input
        type={type}
        placeholder={name}
        value={formData[name]}
        name={name}
        onChange={handleChange}
        // required
      />
    );
  };
  const textareaData = (type, name) => {
    return (
      <textarea
        type={type}
        placeholder={name}
        value={formData[name]}
        name={name}
        rows={4}
        onChange={handleChange}
        // required
      />
    );
  };

  return (
    <div>
      {/* <h1 className="text-4xl text-center mb-2">Add Place</h1> */}
      <form onSubmit={onSubmit}>
        {preInput("Title", "Title for your place")}
        {inputData("text", "title")}
        {preInput("Address", "Address for this place")}
        {inputData("text", "address")}
        {preInput("Photos", "more is better")}
        <UploadPhotos setPhotos={setPhotos} photos={photos} />
        {preInput("Description", "Description of the place")}
        {textareaData("text", "description")}
        {preInput("Perks", "Select all the perks of your place")}
        <Perks selected={perks} setPerks={setPerks} />
        {preInput("Extra Info", "House rules, etc")}
        {textareaData("text", "extraInfo")}
        {preInput("Check In & Check out", "Add check in and out")}
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2">Check In time</h3>
            {inputData("number", "checkIn")}
          </div>
          <div>
            <h3 className="mt-2">Check Out time</h3>
            {inputData("number", "checkOut")}
          </div>
          <div>
            <h3 className="mt-2">Max number of guests</h3>
            {inputData("number", "maxGuests")}
          </div>
        </div>
        <div>
          <h3 className="mt-2 -mb-1">Price per night</h3>
          {inputData("number", "price")}
        </div>

        <button className="primary" type="submit">
          Add Place
        </button>
      </form>
    </div>
  );
};

export default AddPlace;

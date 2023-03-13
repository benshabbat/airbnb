import React, { useState } from "react";

const AddPlace = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center mb-2">Add Place</h1>
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="photos"
          name="photos"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="porks"
          name="porks"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="extraInfo"
          name="extraInfo"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="checkIn"
          name="checkIn"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="checkOut"
          name="checkOut"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="maxGuest"
          name="maxGuest"
          onChange={handleChange}
          required
        />
        <button className="primary" type="submit">
          Add Place
        </button>
      </form>
    </div>
  );
};

export default AddPlace;

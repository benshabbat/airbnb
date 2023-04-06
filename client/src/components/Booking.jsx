import React, { useState, useEffect } from "react";

const Booking = ({ place }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
    price: place?.price,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
  return (
    <div className="bg-gray-100 shadow p-4 rounded-2xl my-4">
      <form onSubmit={onSubmit}>
        <div className="text-center text-xl">
          Price:${place?.price} / per night
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex">
            <div className="py-3 px-4">
              <label>Check In:</label>
              {inputData("date", "checkIn")}
            </div>
            <div className="py-3 px-4 border-l">
              <label>Check Out:</label>
              {inputData("date", "checkOut")}
            </div>
          </div>
          <div className="py-3 px-4 border-t">
            <label>Number Of Guests:</label>
            {inputData("number", "maxGuests")}
          </div>
          <button className="primary" type="submit">
            Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

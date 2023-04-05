import React, { useState, useEffect } from "react";

const Booking = ({place}) => {
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
  return (
    <div className="bg-gray-100 shadow p-4 rounded-2xl my-4">
          <div className="text-center text-xl">
            Price:${place?.price} / per night
          </div>
          <div className="border rounded-2xl mt-4">
            <div className="flex">
              <div className="py-3 px-4">
                <label>Check In:</label>
                <input type="date" name={checkIn} onChange={handleChange} />
              </div>
              <div className="py-3 px-4 border-l">
                <label>Check Out:</label>
                <input type="date" name={checkOut} onChange={handleChange} />
              </div>
            </div>
            <div className="py-3 px-4 border-t">
              <label>Number Of Guests:</label>
              <input type="number" name={maxGuests} onChange={handleChange} />
            </div>
          </div>
          <button className="primary" type="submit">Booking</button>
        </div>
  )
}

export default Booking
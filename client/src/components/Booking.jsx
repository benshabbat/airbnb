import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inputData } from "../UtilsInput";
import { differenceInCalendarDays } from "date-fns";
import { createBooking } from "../Utils";
const Booking = ({ place }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
    price: 0,
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let numberOfDays = 0;
  if (formData.checkIn && formData.checkOut) {
    numberOfDays = differenceInCalendarDays(
      new Date(formData.checkOut),
      new Date(formData.checkIn)
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await createBooking({ ...formData, place:id, user:place?.owner,price:(numberOfDays * place?.price * formData.maxGuests) }, place?.owner);
    }
    navigate("/bookings");
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
              {inputData("date", "checkIn", handleChange, formData)}
            </div>
            <div className="py-3 px-4 border-l">
              <label>Check Out:</label>
              {inputData("date", "checkOut", handleChange, formData)}
            </div>
          </div>
          <div className="py-3 px-4 border-t">
            <label>Number Of Guests:</label>
            {inputData("number", "maxGuests", handleChange, formData)}
          </div>
          {numberOfDays > 0 && (
            <div className="py-3 px-4 border-t">
              <label>Your full name:</label>
              {inputData("text", "name", handleChange, formData)}
              <label>Number Of Phone:</label>
              {inputData("tel", "phone", handleChange, formData)}
            </div>
          )}
          <button className="primary" type="submit">
            Booking ${numberOfDays * place?.price * formData.maxGuests}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

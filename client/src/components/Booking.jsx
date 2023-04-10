import React, { useEffect, useState } from "react";
import { getBookingById } from "../Utils";
import { useParams } from "react-router-dom";
import PhotosForPlacePage from "./PhotosForPlacePage";
import AddressLink from "./AddressLink";
import BookingDate from "./BookingDate";
const Booking = () => {
  const [booking, setBooking] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBookingById(action);
      setBooking(data);
    };
    fetchData();
  }, []);
  if (!action) return "";
  return (
    <div className="mt-8 bg-gray-100 ">
      <h1 className="text-3xl">{booking.place?.title}</h1>
      <AddressLink address={booking?.place?.address} />
      {/* <BookingDate booking={booking} /> */}
      <PhotosForPlacePage place={booking?.place} />
    </div>
  );
};

export default Booking;

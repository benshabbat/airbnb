import React, { useEffect, useState } from "react";
import { getBookingById } from "../Utils";
import { useParams } from "react-router-dom";
import PhotosForPlacePage from "./PhotosForPlacePage";
import Description from "./Description";
import AddressLink from "./AddressLink";
const Booking = () => {
  const [booking, setBooking] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (action) {
        const { data } = await getBookingById(action);
        setBooking(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-8 bg-gray-100 ">
      <h1 className="text-3xl">{booking.place?.title}</h1>
      <AddressLink address={booking.place?.address} />
      <PhotosForPlacePage place={booking.place} />
      <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-[2fr_1fr]">
        <Description place={booking.place} />
      </div>
      <h2 className="font-semibold text-2xl">Extra Info</h2>
      <div className="text-sm text-gray-600">{booking.place?.extraInfo}</div>
    </div>
  );
};

export default Booking;

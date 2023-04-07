import React, { useEffect, useState } from "react";
import { getBookings, getBookingsByOwner } from "../Utils";
import { useParams } from "react-router-dom";
const Bookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (user?._id) {
        const { data } = await getBookingsByOwner(user?._id);
        setBookings(data);
      }
      else{
        const { data } = await getBookings();
        setBookings(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {bookings?.map?.((booking) => {
        return <div key={booking._id}>{booking.checkIn}</div>;
      })}
    </div>
  );
};

export default Bookings;

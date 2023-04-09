import React, { useEffect, useState } from "react";
import { getBookingById } from "../Utils";
import { useParams } from "react-router-dom";
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
    <div>Booking : {booking?.place?.title}</div>
  )
}

export default Booking
import React, { useEffect, useState } from "react";
import { getBookings, getBookingsByOwner } from "../Utils";
import { useParams } from "react-router-dom";
import PlaceImg from "../components/PlaceImg";
import { format } from "date-fns";
const Bookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (user?._id) {
        const { data } = await getBookingsByOwner(user?._id);
        setBookings(data);
      } else {
        const { data } = await getBookings();
        setBookings(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {bookings?.map?.((booking) => {
        return (
          <div key={booking._id}>
            <div className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48">
                <PlaceImg
                  place={booking.place}
                  className={"rounded-2xl object-cover aspect-square"}
                />
              </div>
              <div className="py-4">
              <h2 className="text-xl">{booking.place.title}</h2>
                {format(new Date(booking?.checkIn),"yyyy-MM-dd") } {format(new Date(booking?.checkOut),"yyyy-MM-dd")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bookings;

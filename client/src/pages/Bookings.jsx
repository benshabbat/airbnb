import React, { useEffect, useState } from "react";
import { getBookings, getBookingsByOwner } from "../Utils";
import { useParams, Link } from "react-router-dom";
import PlaceImg from "../components/PlaceImg";
import { FaMoneyBillAlt } from "react-icons/fa";
import Booking from "../components/Booking";
import BookingDate from "../components/BookingDate";
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
      {!action &&
        bookings?.map?.((booking) => {
          return (
            <Link to={`/account/bookings/${booking._id}`} key={booking._id}>
              <div className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-48">
                  <PlaceImg
                    place={booking.place}
                    className={"rounded-2xl object-cover aspect-square"}
                  />
                </div>
                <div className="py-4">
                  <h2 className="text-xl">{booking.place.title}</h2>
                  <BookingDate booking={booking} />
                  <div className="flex gap-1 ">
                    <FaMoneyBillAlt className="h-6" />
                    Total Price:${booking.priceTotal}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      {action && <Booking />}
    </div>
  );
};

export default Bookings;

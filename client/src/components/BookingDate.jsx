import React from "react";
import { format } from "date-fns";
import { BiCalendar } from "react-icons/bi";
import { GiNightSleep } from "react-icons/gi";
const BookingDate = ({ booking }) => {
  return (
    <div className="flex gap-1 ">
      <BiCalendar className="h-6" />
      {format(new Date(booking?.checkIn), "yyyy-MM-dd")}
      &rarr;
      <BiCalendar className="h-6" />
      {format(new Date(booking?.checkOut), "yyyy-MM-dd")}
      <div className="flex gap-1 ">
        <GiNightSleep className="h-6" />
        Nights :
        {booking?.priceTotal / booking?.maxGuests / booking?.place.price}
      </div>
    </div>
  );
};

export default BookingDate;

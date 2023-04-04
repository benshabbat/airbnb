import React from "react";

const Description = ({ place }) => {
  return (
    <div className="my-4">
      <h2 className="font-semibold text-2xl">Description</h2>
      {place?.description}
      <br />
      Check in:{place?.checkIn}
      <br />
      Check out:{place?.checkOut}
      <br />
      Max Guests:{place?.maxGuests}
    </div>
  );
};

export default Description;

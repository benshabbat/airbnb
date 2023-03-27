import React from "react";
import Photo from "./Photo";
const Place = ({ place }) => {
  return (
    <div key={place._id} className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {place.photos?.map((link, index) => {
          return <Photo key={index} link={link} />;
        })}
      </div>
      <h2 className="text-xl">{place.title}</h2>
      <p>{place.description}</p>
    </div>
  );
};

export default Place;

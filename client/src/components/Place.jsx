import React from "react";
import Photo from "./Photo";
import { Link , useParams } from "react-router-dom";
import AddPlace from "./AddPlace";
const Place = ({ place }) => {
    const { action } = useParams();
  return (
    <div className="mt-4">
      <Link to={place._id} className="flex flex-col gap-4 bg-gray-100 p-4 rounded-2xl">
        <div className="w-32 h-32 grow shrink-0">
          {place.photos?.map((link, index) => {
            return (
            // <Photo key={index} link={link} />
            <div key={index} className="flex h-32 w-32 ">
            <img
              className="rounded-2xl w-full object-cover"
              src={"http://localhost:8080/api/uploads/" + link}
            />
          </div>
            )
          })}
        </div>
        <div className="grow-0 shrink">
          <h2 className="text-xl">{place.title}</h2>
          <p className="text-sm mt-2">{place.description}</p>
        </div>
      </Link>
      {action === place._id && <AddPlace/>}
    </div>
  );
};

export default Place;

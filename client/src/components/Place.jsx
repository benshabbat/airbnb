import React from "react";
import { Link, useParams } from "react-router-dom";
import AddPlace from "./AddPlace";
import PlaceImg from "./PlaceImg";
const Place = ({ place }) => {
  const { action } = useParams();
  return (
    <div className="mt-4">
      {action === place._id && <AddPlace place={place} />}
      {!action && (
        <Link
          to={place._id}
          className="flex flex-col gap-4 bg-gray-100 p-4 rounded-2xl"
        >
          <div className="flex w-32 h-32 grow shrink-0">
            <PlaceImg
              className={"rounded-2xl w-full object-cover"}
              place={place}
            />
          </div>
          <div className="grow-0 shrink">
            <h2 className="text-xl">{place.title}</h2>
            <p className="text-sm mt-2">{place.description}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Place;

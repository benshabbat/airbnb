import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
import PhotosForPlacePage from "../components/PhotosForPlacePage";
const PlacePage = () => {
  const [place, setPlace] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaceById(id);
      setPlace(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-8 bg-gray-100 ">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        className="block font-semibold underline my-2"
        target="_blank"
        href={"https://maps.google.com/?q=" + place.address}
      >
        {place.address}
      </a>
      <PhotosForPlacePage photos={place?.photos} />
    </div>
  );
};

export default PlacePage;

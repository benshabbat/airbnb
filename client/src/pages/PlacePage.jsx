import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
import PhotosForPlacePage from "../components/PhotosForPlacePage";
import { BiMap } from "react-icons/bi";
import Description from "../components/Description";
import Booking from "../components/Booking";
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
        className="flex gap-1 my-3 font-semibold underline "
        target="_blank"
        href={"https://maps.google.com/?q=" + place.address}
      >
        <BiMap className="h-6" />
        {place.address}
      </a>
      <PhotosForPlacePage place={place} />
      <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-[2fr_1fr]">
        <Description place={place} />
        <Booking place={place}/>
      </div>
      <h2 className="font-semibold text-2xl">Extra Info</h2>
      <div className="text-sm text-gray-600">
        {place?.extraInfo}
      </div>
    </div>
  );
};

export default PlacePage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
import PhotosForPlacePage from "../components/PhotosForPlacePage";
import Description from "../components/Description";
import BookingForm from "../components/BookingForm";
import AddressLink from "../components/AddressLink";
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
      <AddressLink address={place?.address}/>
      <PhotosForPlacePage place={place} />
      <div className="grid grid-cols-1 mt-8 gap-8 md:grid-cols-[2fr_1fr]">
        <Description place={place} />
        <BookingForm place={place}/>
      </div>
      <h2 className="font-semibold text-2xl">Extra Info</h2>
      <div className="text-sm text-gray-600">
        {place?.extraInfo}
      </div>
    </div>
  );
};

export default PlacePage;

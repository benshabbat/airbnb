import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
import Image from "../components/Image";
import {RiGridFill} from "react-icons/ri";
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
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] ">
          <div>
            <Image
              className="object-cover aspect-square rounded-2xl"
              src={place.photos?.[0]}
            />
          </div>
          <div className="grid">
            <Image
              className="object-cover aspect-square rounded-2xl"
              src={place.photos?.[1]}
            />
            <div className="overflow-hidden">
              <Image
                className="object-cover aspect-square relative top-2 rounded-2xl"
                src={place.photos?.[2]}
              />
            </div>
          </div>
        </div>
        <button className="absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl border border-black flex gap-1"> <RiGridFill/> Show all photos</button>
      </div>
    </div>
  );
};

export default PlacePage;

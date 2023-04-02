import React, { useEffect, useState } from "react";
import { getPlaces } from "../Utils";
import Place from "../components/Place";
import Image from "../components/Image";
import { Link } from "react-router-dom";
const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaces();
      setPlaces(data);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places?.map((place) => {
        return (
          <Link to={"/place/" + place._id} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              <Image
                className="rounded-2xl object-cover aspect-square"
                src={place.photos?.[0]}
              />
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { getPlaces } from "../Utils";
import PlaceImg from "../components/PlaceImg";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
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
            <div className="bg-gray-500 mb-2 rounded-2xl flex relative">
              <PlaceImg
                className={"rounded-2xl object-cover aspect-square"}
                place={place}
              />
              <button className="absolute top-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-1 cursor-pointer">
                <AiOutlineHeart />
              </button>
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

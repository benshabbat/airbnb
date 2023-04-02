import React, { useEffect, useState } from "react";
import { getPlaces } from "../Utils";
import Place from "../components/Place";
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
    <div>
      {" "}
      {places?.map((place) => {
        return <Place key={place._id} place={place} />;
      })}
    </div>
  );
};

export default Home;

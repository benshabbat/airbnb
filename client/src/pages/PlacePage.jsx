import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../Utils";
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
    <div>
 
    </div>
  );
};

export default PlacePage;

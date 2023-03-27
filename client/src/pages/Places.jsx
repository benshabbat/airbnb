import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import AddPlace from "../components/AddPlace";
import { AiOutlinePlus } from "react-icons/ai";
import { getPlacesById } from "../Utils";
import Place from "../components/Place";
const Places = ({ user }) => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlacesById(user._id);
      setPlaces(data);
    };
    fetchData();
  }, []);

  const { action } = useParams();
  return (
    <div>
      <div className="text-center ">
        <Link
          className="inline-flex gap-1 bg-red-700 text-white rounded-full py-2 px-6"
          to={"/account/places/new"}
        >
          <AiOutlinePlus className="h-6 w-6" />
          Add new place
        </Link>
      </div>
      {action !== "new" && (
        <div className="mt-4">
          {places?.map((place) => {
            return <Place key={place._id} place={place} />;
          })}
        </div>
      )}
      {action === "new" && <AddPlace user={user} />}
      <Outlet />
    </div>
  );
};

export default Places;

import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import AddPlace from "../components/AddPlace";
import { AiOutlinePlus } from "react-icons/ai";
import { getPlacesByOwner } from "../Utils";
import Place from "../components/Place";
const Places = ({ user }) => {
  const [places, setPlaces] = useState([]);
  const { action } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlacesByOwner(user._id);
      setPlaces(data);
    };
    fetchData();
  }, [action]);

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
        <>
          {places?.map((place) => {
            return <Place key={place._id} place={place} />;
          })}
        </>
      )}
      {action === "new" && <AddPlace user={user} />}

      <Outlet />
    </div>
  );
};

export default Places;

import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import AddPlace from "../components/AddPlace";
import { AiOutlinePlus } from "react-icons/ai";
import { getPlacesById } from "../Utils";

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
      <div className="mt-4">
        {places?.map((place) => {
          return (
            <div key={place._id} className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
              <div  className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {place.photos?.map((link,index) => {
                  return (
                    <div key={place.photos[index]} className=" flex h-32 w-32 ">
                      <img
                        className="rounded-2xl w-full object-cover"
                        src={"http://localhost:8080/api/uploads/" + link}
                      />
                    </div>
                  );
                })}
              </div>
              <h2 className="text-xl">{place.title}</h2>
              <p>{place.description}</p>
            </div>
          );
        })}
      </div>
      {action === "new" && <AddPlace user={user} />}
      <Outlet />
    </div>
  );
};

export default Places;

import React from 'react'

const Place = ({place}) => {
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
  )
}

export default Place
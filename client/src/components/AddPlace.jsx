import React, { useState } from "react";

const AddPlace = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* <h1 className="text-4xl text-center mb-2">Add Place</h1> */}
      <form onSubmit={onSubmit}>
        <h2 className="text-xl mt-4">Title</h2>
        <p className="text-gray-500 text-sm">Title for your place</p>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          required
        />
        <h2 className="text-xl mt-4">Address</h2>
        <p className="text-gray-500 text-sm">Address for this place</p>
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          required
        />
        <h2 className="text-xl mt-4">Photos</h2>
        <p className="text-gray-500 text-sm">more is better</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add using a link ...jpg"
            name="photos"
            onChange={handleChange}
            required
          />
          <button className="bg-gray-200 px-4 rounded-2xl">Add Photo</button>
        </div>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </button>
        </div>
        <h2 className="text-xl mt-4">Description</h2>
        <p className="text-gray-500 text-sm">Description of the place</p>
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          required
        />
        <h2 className="text-xl mt-4">Perks</h2>
        <p className="text-gray-500 text-sm">
          Select all the perks of your place
        </p>
        <div>
          <label>
            <input type="checkbox" />
            <span>Wifi</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Free Parking spot</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>TV</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Pets</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Private entrance</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="extraInfo"
          name="extraInfo"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="checkIn"
          name="checkIn"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="checkOut"
          name="checkOut"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="maxGuest"
          name="maxGuest"
          onChange={handleChange}
          required
        />
        <button className="primary" type="submit">
          Add Place
        </button>
      </form>
    </div>
  );
};

export default AddPlace;

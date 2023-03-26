import React from "react";
import { BiSearch } from "react-icons/bi";
const SearchWidget = () => {
  return (
    <div className="flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-500">
      <div>Anywhere</div>
      <div className="border-l border-gray-300"></div>
      <div>Any week</div>
      <div className="border-l border-gray-300"></div>
      <div className="text-gray-500">Add guests</div>
      <button className="bg-red-700 text-white p-1 rounded-full">
      <BiSearch className="h-6 w-6"/>
      </button>
    </div>
  );
};

export default SearchWidget;

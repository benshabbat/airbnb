import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const Photo = ({photos,setPhotos}) => {
  const removePhoto =(link)=>{
    
    setPhotos([...photos.filter(selectedName=>selectedName!==link)]);
  }
  return photos.map((link, index) => {
    return (
      <div key={index} className="flex h-32 relative">
        <img
          className="rounded-2xl w-full object-cover"
          src={"http://localhost:8080/api/uploads/" + link}
        />
        <button onClick={()=>removePhoto(link)} className="absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-1 cursor-pointer">
          <FaTrashAlt />
        </button>
      </div>
    );
  });
};

export default Photo;

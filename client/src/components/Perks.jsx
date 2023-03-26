import React from "react";
import { MdPets, MdDoorFront } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { BiRadio, BiWifi } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
const Perks = ({ selected, setPerks }) => {
  const perks = [
    { name: "Wifi", icon: <BiWifi /> },
    { name: "Free Parking spot", icon: <FaParking /> },
    { name: "TV", icon: <CgScreen /> },
    { name: "Radio", icon: <BiRadio /> },
    { name: "Pets", icon: <MdPets /> },
    { name: "Private entrance", icon: <MdDoorFront /> },
  ];
  const handleCheckBoxClick = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setPerks([...selected, name]);
    }
    else{
      setPerks([...selected.filter(selectedName=>selectedName!==name)]);
    }
    console.log(selected)
  };
  return (
    <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {perks?.map((perk, index) => {
        return (
          <label
            key={index}
            className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer "
          >
            <input
              type="checkbox"
              name={perk.name}
              onChange={handleCheckBoxClick}
            />
            {perk.icon}
            <span>{perk.name}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Perks;

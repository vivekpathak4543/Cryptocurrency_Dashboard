import React from "react";
import almabetter from "../../asset/almabetter.png";

//This is Navbar with Almabetter logo
const Navbar = () => {
  return (
    <div className="h-[50px] bg-white pl-5 py-3">
      <img className="h-[40px]" src={almabetter} alt="almabetter logo" />
    </div>
  );
};

export default Navbar;

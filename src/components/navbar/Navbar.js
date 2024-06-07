import React from "react";
import almabetter from "../../asset/almabetter.png";

//This is Navbar with Almabetter logo
const Navbar = () => {
  return (
    <div className=" bg-white pl-5 py-3" style={{ pointerEvents: "none" }}>
      <a
        href="https://www.Almabetter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={almabetter}
          width="100px"
          alt="almabetter logo"
          style={{ pointerEvents: "auto" }}
        />
      </a>
    </div>
  );
};
export default Navbar;

import React from "react";
import almabetter from "../../asset/almabetter.png";

//This is Navbar with Almabetter logo
const Navbar = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex ml-12" style={{ pointerEvents: "none" }}>
        <a
          href="https://www.Almabetter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={almabetter}
            width="125px"
            height="125px"
            alt="almabetter logo"
            style={{ pointerEvents: "auto" }}
          />
        </a>
      </div>
    </div>
  );
};
export default Navbar;

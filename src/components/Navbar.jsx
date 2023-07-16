import React from "react";
import { logoIcon } from "../assets";
function Navbar() {
  return (
    <div>
      <img src={logoIcon} alt="logo" className="nav_logo postion-fixed" />
    </div>
  );
}

export default Navbar;

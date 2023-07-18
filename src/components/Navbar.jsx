import React from "react";
import { Link } from "react-router-dom";
import { logoIcon } from "../assets";
function Navbar() {
  return (
    <div>
      <Link to={"/"}>
      <img src={logoIcon} alt="logo" className="nav_logo postion-fixed" />
      </Link>
    </div>
  );
}

export default Navbar;

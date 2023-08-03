import React from "react";
import { NavigationBarLink } from "../content";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <>
      {NavigationBarLink.map((e) => {
        return (
          <div className="mobile-navbar" key={e.link}>
            <Link to={e.link}>
              <div className="icons">
                <img className="mobile_link" src={e.icon} alt="icon" />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default MobileNavbar;

import React from "react";
import { NavigationBarLink } from "../content";
import { Link } from "react-router-dom";

function NavigationBar() {

    return (
      <div className="navigation_icon">
      {NavigationBarLink.map((e) => (
        <Link to={e.link} key={e.link}>
          <img
            src={e.icon}
            alt="icon"
          />
        </Link>
      ))}

    </div>
  );
}

export default NavigationBar;

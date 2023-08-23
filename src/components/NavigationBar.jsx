import React, { useState, useEffect } from "react";
import { NavigationBarLink } from "../content";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get the current location
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 899);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobile) {
    return null;
  }
  return (
    <div className="navigation_icon">
      {NavigationBarLink.map((e) => (
        <Link to={e.link} key={e.link} target={e.target}>
          <img src={e.icon} alt="icon"  className={
          location.pathname === e.link ? "active_link !important" : ""
        }/>
        </Link>
      ))}
    </div>
  );
}

export default NavigationBar;

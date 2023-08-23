import React, { useState, useEffect } from "react";
import { sideBarLinks } from "../content";
import { Link, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
function Pegination() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      className="postion-fixed nav-postion"
    >
      <Grid item xs={12}>
        <div className={`pagination-container ${isMobile ? "mobile" : ""}`}>
          <div className="pages">
            {sideBarLinks.map((link) => (
              <Link
                key={link.label}
                className={
                  location.pathname === link.btnLink ? "page_active" : "page"
                }
                to={link.btnLink}
                target={link.target}
              >
                <img src={link.iconLink} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Pegination;

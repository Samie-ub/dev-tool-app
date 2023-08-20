import React, { useState, useEffect } from "react";
import { sideBarLinks } from "../content";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
function Pegination() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
                className="page"
                to={link.btnLink}
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

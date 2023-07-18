import React from "react";
import { sideBarLinks } from "../content/index";
import { Grid } from "@mui/material";
import { Link, useLocation  } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <Grid container>
      <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
        <div className="sidebar_container postion-fixed">
          {sideBarLinks.map((e) => {
            const isActive = location.pathname === e.btnLink;
            const className = isActive ? "sidebar_btn active_link" : "sidebar_btn";
            return (
              <Link  to={e.btnLink} className="router_link">
                <div className={className}>
                  <img src={e.iconLink} alt="icons" />
                  <p>{e.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default Sidebar;

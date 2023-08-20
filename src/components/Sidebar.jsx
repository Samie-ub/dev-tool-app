import React from "react";
import { sideBarLinks } from "../content/index";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const filteredLinks = sideBarLinks.filter((link) => link.label !== "home");
  return (
    <Grid container>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        md={12}
        lg={12}
      >
        <div className="sidebar_container">
          {filteredLinks.map((e) => {
            const isActive = location.pathname === e.btnLink;
            const className = isActive
              ? "sidebar_btn active_link"
              : "sidebar_btn";
            return (
              <Link
                to={e.btnLink}
                className="router_link"
                showOnMobile={e.showOnMobile}
              >
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

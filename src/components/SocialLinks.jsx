import React from "react";
import { icons } from "../content";
import { Grid } from "@mui/material";

function SocialLinks() {
  return (
   
       <Grid container>
      <Grid item md={12} lg={12} sx={{ display: { xs: 'none',sm:'block' } }}>
    <div className="links_container">
      {icons.map((e) => {
        return (
          <a href={e.link} target="_blank" rel="noreferrer">
            <img className="social_icons" src={e.icon} alt="icons" />
          </a>
        );
      })}
      
    </div>
      </Grid>
      </Grid>
  );
}

export default SocialLinks;

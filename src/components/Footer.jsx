import React from "react";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <Grid container justifyContent={"center"} className="b-r">
      <Grid item lg={11.72}>
        <div className="footer b-r">
          <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
            <Grid item lg={3.5}>
              <h1>Dev Tools</h1>
            </Grid>
            <Grid item lg={3.5}></Grid>
            <Grid item lg={3.5}></Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;

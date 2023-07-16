import React from "react";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";

function Home() {
  return (
  <div className="home_page">
    <Grid container justifyContent={"flex-start"}>
      <Grid item lg={10.4}>
    <Cards/>
      </Grid>
    </Grid>
  </div>
  )
}

export default Home;
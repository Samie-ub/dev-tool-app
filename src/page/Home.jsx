import React from "react";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";

function Home() {
  return (
    <div className="top-spacing">
      <Grid
        container
        sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
      >
        <Grid item xs={12} md={10} lg={10.4}>
          <Cards />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

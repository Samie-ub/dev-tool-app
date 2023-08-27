import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard";
import { uxuiData } from "../assets/uxui-assets";
function Uxui() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="top-spacing">
      <Grid container justifyContent={"flex-start"} gap={2}>
        <Grid item xs={12} lg={10.4}>
          {isLoading ? (
            <Grid container justifyContent={"center"} gap={2}>
              {uxuiData.map((item, index) => (
                // Show loading animation while loading
                <Grid item xs={10} sm={6} md={4} lg={3} key={index}>
                  <div className="card_loader" />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container justifyContent={"center"} gap={2}>
              {uxuiData.map((item, index) => (
                <Grid item xs={10} sm={6} md={4} lg={3}>
                  <SingleCard
                    key={index}
                    ImageSrc={item.ImageSrc}
                    title={item.title}
                    description={item.description}
                    websiteLink={item.websiteLink}
                    tag={item.tag}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Uxui;
import React, { useEffect, useState } from "react";
import { webDev } from "../assets/websites-assets";
import { DesignData } from "../assets/design-assets";
import { Grid } from "@mui/material";
import { cardLinkIcon } from "../assets";
import { VideoData } from "../assets/vedio-assets";
function Cards() {
  const [mixedData, setMixedData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(25);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  useEffect(() => {
    const combinedData = [...webDev, ...DesignData,...VideoData];
    const shuffledData = shuffleArray(combinedData);
    setMixedData(shuffledData);
  }, []);

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 4);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {mixedData.slice(0, visibleCards).map((item, index) => {
          return (
            <Grid lg={3}>
              <div className="card" key={index}>
                <div className="card_img_container">
                  <img src={item.ImageSrc} alt="tools" />
                </div>
                <div className="card_content_container">
                  <div className="tag">
                    <span>{item.tag}</span>
                  </div>
                  <a href={item.websiteLink} target="_blank" rel="noreferrer">
                    <div className="card_link_container">
                      <h1>{item.title}</h1>
                      <img src={cardLinkIcon} alt="" />
                    </div>
                  </a>

                  <p>{item.description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* {loadMoreVisible && visibleCards < mixedData.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )} */}
    </div>
  );
}

export default Cards;

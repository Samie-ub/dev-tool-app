import React, { useEffect, useState } from "react";
import { webDev } from "../assets/websites-assets";
import { DesignData } from "../assets/design-assets";
import { Grid } from "@mui/material";
import { cardLinkIcon } from "../assets";
import { VideoData } from "../assets/vedio-assets";
import { AnimationData } from "../assets/animation-assets";
import { MockupData } from "../assets/mockup-assets";
import { courseData } from "../assets/courses-assets";
import { aitoolData } from "../assets/ai-assets";
import { moreData } from "../assets/more-assets";
function Cards() {
  const [mixedData, setMixedData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(27);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    const combinedData = [...webDev, ...DesignData,...VideoData,...AnimationData,...MockupData,...courseData,...aitoolData,...moreData];
    const shuffledData = shuffleArray(combinedData);
    setMixedData(shuffledData);
  }, []);
  

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 6);
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
            <Grid xs={11} sm={6} md={4} lg={3}>
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
                      <img src={cardLinkIcon} className="link_image" alt="link-icon" />
                    </div>
                  </a>

                  <p>{item.description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent={"flex-end"} justifyItems={"center"} mt={5}>
        <Grid item lg={6}>
            {loadMoreVisible && visibleCards < mixedData.length && (
        <button onClick={handleLoadMore}><span>Load More</span></button>
      )}
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Cards;

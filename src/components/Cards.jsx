import React, { useEffect, useState, useRef } from "react";
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
  // State Initialization Starts here
  const [mixedData, setMixedData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(27);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadMoreObserver, setLoadMoreObserver] = useState(null);
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  const lastCardRef = useRef(null);

  // State Initialization Ends here
  const handleLoadMore = () => {
    setIsLoading(true);
    setVisibleCards(visibleCards + 6);
    setLoadMoreVisible(false);
    setTimeout(() => {
      setLoadMoreVisible(true);
      setIsLoading(false);
    }, 3000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      !isLoading &&
      !loadingVisible
    ) {
      setLoadingVisible(true); // Start loading animation
      setTimeout(() => {
        setVisibleCards(visibleCards + 27);
        setLoadingVisible(false); // Stop loading animation
      }, 3000);
    }
  };
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const combinedData = [
      ...webDev,
      ...DesignData,
      ...VideoData,
      ...AnimationData,
      ...MockupData,
      ...courseData,
      ...aitoolData,
      ...moreData,
    ];
    const shuffledData = shuffleArray(combinedData);
    setMixedData(shuffledData);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCards, isLoading, loadingVisible]);

  useEffect(() => {
    if (!loadingVisible) {
      setLoading(true);
      setTimeout(() => {
        setVisibleCards(visibleCards + 27);
        setLoading(false);
      }, 3000);
    }
  }, [loadingVisible, visibleCards]);

  useEffect(() => {
    if (lastCardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              handleLoadMore();
            }, 3000);
          }
        },
        { threshold: 1 }
      );
      setLoadMoreObserver(observer);
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (loadMoreObserver) {
        loadMoreObserver.disconnect();
      }
    };
  }, [lastCardRef]);
  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {isLoading ? (
          <>
            {mixedData.slice(0, visibleCards).map((item, index) => (
              <Grid xs={10} sm={6} md={4} lg={3} key={index}>
                <div className="card_loader" />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {mixedData.slice(0, visibleCards).map((item, index) => (
              <Grid xs={10} sm={4.9} md={4.2} lg={3} key={index}>
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
                        <img
                          src={cardLinkIcon}
                          className="link_image"
                          alt="link-icon"
                        />
                      </div>
                    </a>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"} mt={5}  sx={{ mb: { xs: 2, md: 0 } }}>
        <Grid item xs={12} md={9} lg={9} mt={5} className="postion-relative">
          {loadingVisible && (
            <div className="loader-glass" ref={lastCardRef}></div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;

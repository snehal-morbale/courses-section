import React from "react";
import "./Background.css";
import video1 from "/images/V1.mp4";
import image1 from "/images/Back1.jpg";
import image2 from "/images/Back2.jpg";
import image3 from "/images/Back4.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="" />;
  }
};

export default Background;

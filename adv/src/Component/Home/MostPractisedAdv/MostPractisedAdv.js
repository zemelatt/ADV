import React, { useState } from "react";
import "./MostPractisedAdv.css";
import HomeImg from "../../../asset/yoga.jpg";
import HomeImg2 from "../../../asset/africa2.avif";
const SeparteQuote = () => {
  const [slide, setSlide] = useState("");
  addEventListener("scroll", () => {
    const Ypos = window.scrollY;
    if (Ypos > 160 && Ypos < 1060) {
      setSlide("start");
    } else {
      setSlide("");
    }
  });
  return (
    <>
      <h2 className="mostPracticed">Most practiced Adventure</h2>
      <div className="aboutAdv">
        <div className="aboutAdvContainer">
          <div className={`animatedDiv ${slide}`}>
            <div className="homeDescription">
              <h1 className="advName">Yoga</h1>{" "}
            </div>
            <img src={HomeImg} className="homeImg" />
          </div>
        </div>
        <div className="aboutAdvSafari">
          <div className={`animatedSafari ${slide}`}>
            <img src={HomeImg2} className="homeImg" />
            <div className="safariDescription">
              <h1 className="advName">Safari</h1>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeparteQuote;

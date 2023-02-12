import React from "react";
import Africa from "../../../asset/africa.jpg";
import Ausralia from "../../../asset/ausralia.webp";
import Asia from "../../../asset/asia.webp";
import "./continent.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Continent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mainCintainer">
      <h2 className="continentHeader">Where do you went to go ?</h2>
      <div className="continent">
        <Carousel responsive={responsive} showDots={false}>
          <div>
            <div className="continentContainer">
              <div className="continentProp">
                <div className="coverOverLay">
                  <h1 className="ContinentName">Asia</h1>
                </div>
                <img src={Asia} className="c1Image" />

                <div className="c1Description">
                  This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end.
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="continentContainer">
              <div className="continentProp">
                <div className="coverOverLay">
                  <h1 className="ContinentName">Ausralia</h1>
                </div>
                <img src={Ausralia} className="c1Image" />

                <div className="c1Description">
                  This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="continentContainer">
              <div className="continentProp">
                <div className="coverOverLay">
                  <h1 className="ContinentName">Asia</h1>
                </div>
                <img src={Asia} className="c1Image" />

                <div className="c1Description">
                  This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="continentContainer">
              <div className="continentProp">
                <div className="coverOverLay">
                  <h1 className="ContinentName">Asia</h1>
                </div>
                <img src={Asia} className="c1Image" />

                <div className="c1Description">
                  This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="continentContainer">
              <div className="continentProp">
                <div className="coverOverLay">
                  <h1 className="ContinentName">Africa</h1>
                </div>
                <img src={Africa} className="c1Image" />

                <div className="c1Description">
                  This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end.
                </div>
                {""}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Continent;

import React from "react";
import "./Benefits.css";
import PH from "../../../asset/Improve-Your-Health.jpg";
import mentalH from "../../../asset/mentalEdited.jpg";
import FriendsH from "../../../asset/friends.jpg";
import acomplishiment from "../../../asset/aco.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Benefits = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Carousel
        // additionalTransfrom={0}
        arrows={false}
        autoPlay
        // autoPlaySpeed={1}
        centerMode={false}
        // customTransition="all 5s linear"
        transitionDuration={1000}
        draggable={true}
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={0}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <div className="benefits">
          <div className="benefitsContainer">
            <div className="benefit">
              <div className="benefitOverLay"></div>
              <img src={PH} className="benefitImg" />
              <div className="bottom-left">Improved physical health</div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefitsContainer">
            <div className="benefit">
              <div className="benefitOverLay"></div>
              <img src={mentalH} className="benefitImg" />
              <div className="bottom-left">
                Positive effects on mental health
              </div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefitsContainer">
            <div className="benefit">
              <div className="benefitOverLay"></div>
              <img src={FriendsH} className="benefitImg" />
              <div className="bottom-left">
                Make new friends and Bond Quickly
              </div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefitsContainer">
            <div className="benefit">
              <div className="benefitOverLay"></div>
              <img src={acomplishiment} className="benefitImg" />
              <div className="bottom-left">Sense of accomplishment</div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Benefits;

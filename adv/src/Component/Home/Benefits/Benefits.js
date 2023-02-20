import React from "react";
import "./Benefits.css";
import PH from "../../../asset/Improve-Your-Health.jpg";
import mentalH from "../../../asset/mentalEdited.jpg";
import FriendsH from "../../../asset/friends.jpg";
import acomplishiment from "../../../asset/aco.jpg";

import Benefit from "./Benefit";

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
        arrows={false}
        autoPlay
        centerMode={false}
        transitionDuration={50}
        draggable={true}
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={0}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <Benefit img={PH} benefit="Improved physical health" />
        <Benefit img={mentalH} benefit="Positive effects on mental health" />
        <Benefit img={FriendsH} benefit="Make new friends and Bond Quickly" />
        <Benefit img={acomplishiment} benefit="Sense of accomplishment" />
      </Carousel>
    </>
  );
};

export default Benefits;

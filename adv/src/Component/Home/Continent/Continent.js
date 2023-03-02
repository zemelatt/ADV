import React from "react";
import Africa from "../../../asset/africa.jpg";
import Europ from "../../../asset/Kenya.Multigenerational-safari.home_.jpg";
import Ausralia from "../../../asset/mckenzie-river-5129717_1280.jpg";
import Asia from "../../../asset/asia.webp";
import "./continent.css";
import ContinentProp from "./ContinentProp";
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
          <ContinentProp
            img={Asia}
            description="This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end."
            Continent="Asia"
          />
          <ContinentProp
            img={Ausralia}
            description="This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end."
            Continent="Australia"
          />
          <ContinentProp
            img={Europ}
            description="This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end."
            Continent="Europ"
          />
          <ContinentProp
            img={Africa}
            description="This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end."
            Continent="Africa"
          />
          <ContinentProp
            img={Asia}
            description="This is one of my all-time favorite adventure life quotes.
                  Making the leap of faith can be daunting, but it always leads
                  to breakthroughs in the end."
            Continent="Asia"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Continent;

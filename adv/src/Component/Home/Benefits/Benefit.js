import React from "react";

const Benefit = ({ img, benefit }) => {
  return (
    <div className="benefits">
      <div className="benefitsContainer">
        <div className="benefit">
          <div className="benefitOverLay"></div>
          <img src={img} className="benefitImg" />
          <div className="bottom-left">{benefit}</div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

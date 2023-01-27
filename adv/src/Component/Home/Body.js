import React from "react";

import MyImage from "../../asset/pexels-photo-1761282.jpeg";
import MyImage2 from "../../asset/pexels-photo-1819657.jpeg";
import MyImage3 from "../../asset/pexels-photo-3225529 (1).jpeg";
const Body = () => {
  return (
    <div>
      <div className="image-container">
        <div className="imgex item">
          <div>
            <h2 className="location-name">London</h2>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>

          <img src={MyImage} alt="top places" className="homeImg" />
        </div>
        <div className="imgez item ">
          <img src={MyImage2} alt="top places" className="homeImg" />
          <div>
            <h2 className="location-name">Peru</h2>
            <p className="description" style={{ color: "black" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="imgey item">
          <div>
            <h2 className="location-name">Italy</h2>

            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <img src={MyImage3} alt="top places" className="homeImg" />
        </div>
      </div>
    </div>
  );
};

export default Body;

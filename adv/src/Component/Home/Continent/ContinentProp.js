import React from "react";

const ContinentProp = ({ img, description, Continent }) => {
  return (
    <div>
      <div className="continentContainer">
        <div className="continentProp">
          <div className="coverOverLay">
            <h1 className="ContinentName">{Continent}</h1>
          </div>
          <img src={img} className="c1Image" />

          <div className="c1Description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ContinentProp;

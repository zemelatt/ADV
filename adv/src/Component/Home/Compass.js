import React from "react";

const Compass = () => {
  return (
    <main>
      <div className="square">
        <div className="square circle">
          <span className="north">
            <div className="pointer"></div>N
          </span>
          <span className="smallDeg"></span>
          <span className="neutral">
            <span className="west side">
              <div className="hr-pointer"></div>W
            </span>
            <span className="center">
              <div className="cross1"></div>
              <div className="cross2"></div>
              <div className="Maincross rotate"></div>
            </span>
            <span className="smallDeg3"></span>
            <span className="east side">
              E<div className="hr-pointer"></div>
            </span>
          </span>
          <span className="smallDeg4"></span>
          <span className="smallDeg2"></span>
          <span className="south">
            S<div className="pointer"></div>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Compass;

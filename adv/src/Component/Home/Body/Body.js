import React from "react";
import { SiSafari } from "react-icons/si";
import { GrYoga } from "react-icons/gr";
import { GiSummits } from "react-icons/gi";
import { MdNordicWalking } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { TbSpeedboat } from "react-icons/tb";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { GiMountainClimbing } from "react-icons/gi";
const Body = () => {
  return (
    <div>
      <div className="image-container">
        <div className="homequotes">
          <div className="advice">
            <h6>
              Let's Make Life <div id="spin"></div>
            </h6>
          </div>
          <p className="quotes">
            “If we were meant to stay in one place, we’d have roots instead of
            feet.”
          </p>
          <p>
            <i className="quotesby">Rachel Wolchin</i>
          </p>
        </div>
        <div className="typeOfAdv">
          <ul className="listOfType">
            <li className="listAdv">
              <SiSafari /> Safari
            </li>
            <li className="listAdv">
              <GrYoga /> Yoga
            </li>
            <li className="listAdv">
              <GiSummits /> Summer camps
            </li>
            <li className="listAdv">
              <MdNordicWalking />
              Trekking
            </li>

            <li className="listAdv">
              <BiCycling />
              Cycling{" "}
            </li>
            <li className="listAdv">
              <TbSpeedboat />
              Canoeing
            </li>
            <li className="listAdv">
              <MdOutlineDirectionsBoat />
              Kayaking
            </li>
            <li className="listAdv">
              <GiMountainClimbing />
              Rock climbing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;

import React, { useEffect, useState } from "react";

import Body from "./Body/Body";

import MostPractisedAdv from "./MostPractisedAdv/MostPractisedAdv.js";
import Continent from "./Continent/Continent";
import Benefits from "./Benefits/Benefits";

import "./home.css";

const Home = () => {
  const [classs2, setclass2] = useState("home");
  useEffect(() => {
    setTimeout(greet, 9000);
  }, []);
  function greet(e) {
    setclass2("intros");
  }

  return (
    <div>
      <div className={classs2}>
        <h2 className="homenots">Check Our Adventure List</h2>
        <button className="adBtn" onClick={() => setclass2("home")}>
          <h3 className="homenotsbtn">OK</h3>
        </button>
      </div>
      <div className="compassBody">
        <Body />
      </div>
      <MostPractisedAdv />
      <Continent />
      <Benefits />
    </div>
  );
};

export default Home;

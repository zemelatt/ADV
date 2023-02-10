import React, { useEffect, useState } from "react";

import Body from "./Body/Body";

import MostPractisedAdv from "./MostPractisedAdv.js";
import Continent from "./Continent/Continent";

import "./home.css";

const Home = () => {
  const [classs2, setclass2] = useState("home");
  useEffect(() => {
    setTimeout(greet, 5000);
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
    </div>
  );
};

export default Home;

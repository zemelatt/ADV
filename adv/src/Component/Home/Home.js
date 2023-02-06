import React, { useEffect, useState } from "react";

import Body from "./Body";
import Compass from "./Compass";

import "./home.css";
import "./compass.css";

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
      <Body />
      <Compass className="comp" />
    </div>
  );
};

export default Home;

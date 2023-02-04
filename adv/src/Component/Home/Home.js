import React, { useEffect, useState } from "react";
import "./home.css";
import Body from "./Body";
import "./compass.css";
import Compass from "./Compass";

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

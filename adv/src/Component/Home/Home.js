import React, { useEffect, useState } from "react";
import "./home.css";
import MyImage from "../../asset/pexels-photo-1761282.jpeg";
import MyImage2 from "../../asset/top-places-to-visit-in-the-world-machu-picchu-peru.jpg";
import MyImage3 from "../../asset/pexels-photo-3225529 (1).jpeg";

const Home = () => {
  const [classs2, setclass2] = useState("home");
  useEffect(() => {
    setTimeout(greet, 5000);
  }, []);
  function greet(e) {
    setclass2("intros");
  }

  return (
    <>
      <div>
        <h1 className="info">
          It feels good to be lost in the right direction !!
        </h1>
      </div>
      <div className={classs2}>
        <h2 className="homenots">Check Our Adventure List</h2>
        <button onClick={() => setclass2("home")}>
          <h3 className="homenotsbtn">OK</h3>
        </button>
      </div>

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

          <img src={MyImage} alt="top places" />
        </div>
        <div className="imgez item">
          <img src={MyImage2} alt="top places" />
          <div>
            <h2 className="location-name">Peru</h2>
            <p className="description">
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

          <img src={MyImage3} alt="top places" />
        </div>
      </div>
    </>
  );
};

export default Home;

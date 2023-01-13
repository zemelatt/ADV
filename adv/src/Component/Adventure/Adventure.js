import React, { useEffect, useState } from "react";
import "./adv.css";

import Img from "../../asset/file.json";

const Adventure = () => {
  const [allAdv, setAllAdv] = useState([]);
  let all = Img.concat(allAdv);

  useEffect(() => {
    fetch(`http://localhost:2222/all-adventures`)
      .then((res) => res.json())
      .then(
        (result) => {
          setAllAdv(result);
        },

        (error) => {
          console.log(error);
        }
      );
  }, [allAdv]);

  return (
    <>
      <div className="adventure list">
        {all.map((val) => (
          <div className="adv details" key={val.adv_id}>
            <div className="imgDisplayer">
              <img
                src={require(`../../../../server/uploads/${val.imgFile}`)}
                alt="example"
                className="advImg"
              />
            </div>

            <div className="advDescription">
              <h4 className="countryName dis">{val.countryName}</h4>
              <p className="placeName dis">{val.placeName}</p>

              <p className="paraD">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Adventure;

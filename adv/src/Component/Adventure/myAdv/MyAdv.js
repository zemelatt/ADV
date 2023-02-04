import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import { AiFillEye } from "react-icons/ai";
// import "./update.css";
import "../adv.css";
import Axios from "axios";

const MyAdv = () => {
  const push = useNavigate();
  const { id } = useParams();
  const [advs, setAdvs] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:2222/my-adv/${id}`, {
      withCredentials: true,
    }).then((response) => {
      setAdvs(response.data);
    });
  }, []);

  const deletemyadv = (num) => {
    Axios.delete(`http://localhost:2222/delete/my-adv_id/${num}`, {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      push(`/my-adv/${id}`); //my-adv/128
    });
  };

  return (
    <div>
      <div className="adventure list">
        {advs.length > 0 ? (
          advs.map((val) => (
            <div className="adv details" key={val.adv_id}>
              <div className="imgEdit">
                <img
                  src={require(`../../../../../server/uploads/${val.imgFile}`)}
                  alt="example"
                  className="advImg"
                />
              </div>
              <div className="advDescription">
                <div className="descriptionHead">
                  <h4 className="countryName dis">{val.countryName}</h4>
                  <p className="nomeOfPlace">{val.placeName}</p>
                </div>
                <div className="discriptiondisplay">
                  <p className="description">{val.description}</p>
                </div>

                <div className="svg">
                  <div className="editing">
                    <h2 className="detailsSpot">
                      <Link
                        className="eyeSpot"
                        to={`/moreDetails/${val.adv_id}`}
                      >
                        <AiFillEye />
                      </Link>
                    </h2>
                    <Link to={`/updating/${val.adv_id}`}>
                      <AiFillEdit className="editIcon" />
                    </Link>

                    <div>
                      <FaTrashAlt
                        className="deleteIcon"
                        onClick={() => {
                          deletemyadv(val.adv_id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="infoGiver">
            <h1 id="noData">You Have No Adventure</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAdv;

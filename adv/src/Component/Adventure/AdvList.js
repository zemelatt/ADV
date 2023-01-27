import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRest } from "react-icons/ai";

const AdvList = ({ all, admin }) => {
  const push = useNavigate();
  const deleteAdvs = (id) => {
    Axios.delete(`http://localhost:2222/delete/my-adv_id/${id}`, {
      withCredentials: true,
    }).then((response) => {
      push("/adv"); //my-adv/128
    });
  };
  return (
    <div className="adventure list">
      {all.map((val) => (
        <div className="adv details" key={val.adv_id}>
          <img
            src={require(`../../../../server/uploads/${val.imgFile}`)}
            alt="example"
            className="advImg"
          />
          {admin ? (
            <div className="editing">
              <Link to={`/updating/${val.adv_id}`}>
                <AiFillEdit className="editIcon" />
              </Link>
              <div>
                <AiOutlineRest
                  onClick={() => {
                    deleteAdvs(val.adv_id);
                  }}
                  className="deleteIcon"
                />
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="advDescription">
            <div className="descriptionHead">
              <h4 className="countryName dis">{val.countryName}</h4>-
              <p className="placeName dis">{val.placeName}</p>
            </div>
            <p className="paraD">{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvList;

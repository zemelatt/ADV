import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import "./adv.css";

const List = ({ advs, admin }) => {
  const push = useNavigate();
  const [zoom, setZoom] = useState("port");
  const [picture, setPic] = useState("");
  const [class2, setclass2] = useState("home");
  const [dId, setId] = useState("");
  const deletemyadv = (num) => {
    console.log(num);
    const advId = localStorage.getItem("delete");
    Axios.delete(`http://localhost:2222/delete/my-adv_id/${advId}`, {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      push(`/adv`); //my-adv/128
    });
  };
  const zoomOutpic = (id) => {
    setPic(id);
    setZoom("port");
  };
  const toDelete = (deleteid) => {
    setId(deleteid);
    localStorage.setItem("delete", deleteid);
  };
  return (
    <div className="adventure list">
      {advs.length > 0 ? (
        advs.map((val, index) => (
          <div className="adv details" key={val.adv_id}>
            <div className="imgEdit">
              <img
                src={require(`../../../../server/uploads/${val.imgFile}`)}
                alt="example"
                className="advImg"
                onClick={() => {
                  zoomOutpic(val.imgFile);
                }}
              />
            </div>
            {picture && (
              <div className={zoom}>
                <h1 className="XBtn" onClick={() => setZoom("NOport")}>
                  X
                </h1>
                <img
                  className="popImg"
                  src={require(`../../../../server/uploads/${picture}`)}
                />
              </div>
            )}
            <div className="advDescription">
              <div className="descriptionHead">
                <h4 className="countryName dis">{val.countryName}</h4>
                <p className="nomeOfPlace">{val.placeName}</p>
              </div>
              <div className="discriptiondisplay">
                <p className="description">{val.description}</p>
              </div>
              <div className={class2}>
                <p className="popMsg">Are you sure, You went to delete it ?</p>
                <div className="popOptions">
                  <button
                    className="cancelDlt"
                    onClick={() => setclass2("home")}
                  >
                    No, don't delete !
                  </button>

                  <button className="delete-btn" onClick={deletemyadv}>
                    Yes, delete it !
                  </button>
                </div>
              </div>
              <div className="svg">
                <h2 className="detailsSpot">
                  <Link className="eyeSpot" to={`/moreDetails/${val.adv_id}`}>
                    <AiFillEye />
                  </Link>
                </h2>
                {admin ? (
                  <div>
                    <div className="editing" onClick={() => setclass2("popup")}>
                      <Link to={`/updating/${val.adv_id}`}>
                        <AiFillEdit className="editIcon" />
                      </Link>
                      <FaTrashAlt
                        onClick={() => toDelete(val.adv_id)}
                        className="deleteIcon"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="infoGiver">No Adventure added </h1>
      )}
    </div>
  );
};

export default List;

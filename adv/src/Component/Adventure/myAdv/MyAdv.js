import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRest } from "react-icons/ai";
import "./update.css";
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
  }, [id]);

  const deletemyadv = (num) => {
    console.log("delete request from myadv page");
    // DELETE FROM table_name WHERE condition;
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
        {advs.map((val) => (
          <div className="adv details" key={val.adv_id}>
            <img
              src={require(`../../../../../server/uploads/${val.imgFile}`)}
              alt="example"
              className="advImg"
            />
            <div className="editing">
              <Link to={`/updating/${val.adv_id}`}>
                <AiFillEdit className="editIcon" />
              </Link>
              <button>
                <div>
                  <AiOutlineRest
                    className="deleteIcon"
                    onClick={() => {
                      deletemyadv(val.adv_id);
                    }}
                  />
                </div>
              </button>
            </div>
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
    </div>
  );
};

export default MyAdv;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import { RiDislikeLine } from "react-icons/ri";
import "./one.css";

import LoginErr from "../Add-Adventure/LoginErr";

import { useSelector } from "react-redux";
const OneDetails = () => {
  const toKnowRole = useSelector((state) => state.userRole);
  const userName = toKnowRole.todoReducer[0];
  const userId = sessionStorage.getItem("userId");

  const [classs, setCllass] = useState("ad");
  const [classs2, setclass2] = useState("home");
  const [err, setErr] = useState("");

  const { id } = useParams();
  const [ones, setDetails] = useState([]);
  const [className, setClass] = useState("none");
  const [className2, setClass2] = useState("none");
  const [liks, setLike] = useState(0);
  const [notlike, setdisLike] = useState(0);
  // number of like
  useEffect(() => {
    Axios.get(`http://localhost:2222/noLike/${id}`, {
      withCredentials: true,
    }).then((responce) => {
      if (responce.data.user == userId) {
        setClass2("like");
      }
      // else {
      //   setClass2(" ");
      // }
      setLike(responce.data.results);
    });
  });
  // number of dislike
  useEffect(() => {
    Axios.get(`http://localhost:2222/nodislike/${id}`, {
      withCredentials: true,
    }).then((responce) => {
      if (responce.data.disLiker == userId) {
        setClass("dislike");
      } else {
        setClass("none");
      }
      setdisLike(responce.data.results);
    });
  });
  // getting singele adventure
  useEffect(() => {
    Axios.get(`http://localhost:2222/one/adv/${id}`, {
      withCredentials: true,
    }).then((responce) => {
      setDetails(responce.data);
    });
  }, []);

  const dislike = async (id) => {
    if (!userId) {
      setCllass("MODELstyle");
      setclass2("cover");
      setErr("log in first");
    } else {
      await Axios.post(
        `http://localhost:2222/dislikes/${id}/${userId}/${userName.text}`,
        {
          withCredentials: true,
        }
      ).then((res) => {
        if (res.data.note == "hate") {
          setClass("dislike");
        } else {
          setClass("none");
        }
      });
    }
  };
  const like = async (id) => {
    if (!userId) {
      setCllass("MODELstyle");
      setclass2("cover");
      setErr("log in first");
    } else {
      await Axios.post(
        `http://localhost:2222/like/my-adv/${id}/${userId}/${userName.text}`,
        {
          withCredentials: true,
        }
      ).then((res) => {
        if (res.data.note == "liked") {
          setClass2("like");
        } else {
          setClass2("none");
        }
      });
    }
  };
  const removeport = () => {
    setCllass("ad");
    setclass2("home");
  };
  return (
    <>
      <LoginErr
        setclass2={setclass2}
        classs2={classs2}
        classs={classs}
        err={err}
        removeport={removeport}
      />
      <div className="detailsCon">
        {ones.map((post) => (
          <div className="oneContainer" key={post.adv_id}>
            <div className="imageHolder">
              <img
                className="oneI"
                src={require(`../../../../server/uploads/${post.imgFile}`)}
              />
              <div className="reactions">
                <div className="lovesign">
                  <GiLoveMystery
                    className={`love ${className2}`}
                    onClick={() => {
                      like(post.adv_id);
                    }}
                  />
                  <p>{liks}</p>
                </div>
                <div className="notlikes">
                  <RiDislikeLine
                    onClick={() => {
                      dislike(post.adv_id);
                    }}
                    className={`hate ${className}`}
                  />
                  <p>{notlike}</p>
                </div>
              </div>
            </div>
            <div className="subContainer">
              <div className="placeCountry">
                <div
                  className="countryName"
                  style={{ color: "black", fontSize: "1.3em" }}
                >
                  {post.countryName}-{post.placeName}
                </div>
              </div>
              <div className="TypedescriptionHolder">
                <div className="advType">{post.advType}</div>
                <div className="descriptionHolder">{post.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OneDetails;

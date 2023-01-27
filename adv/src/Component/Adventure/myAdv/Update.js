import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./update.css";
import Axios from "axios";

const Update = () => {
  const userId = sessionStorage.getItem("userId");
  console.log(userId);

  const push = useNavigate();
  const { id } = useParams();

  const [classs, setCllass] = useState("ad");
  const [classs2, setclass2] = useState("");

  const [countryName, setCountryName] = useState();
  const [placeName, setPlaceName] = useState("");
  const [advType, setAdvType] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");

  const getCountry = (e) => {
    setCountryName(e.target.value);
  };
  const getPlace = (e) => {
    setPlaceName(e.target.value);
  };
  const getType = (e) => {
    setAdvType(e.target.value);
  };
  const getDiscription = (e) => {
    setDescription(e.target.value);
  };
  const removeport = () => {
    setCllass("ad");
    setclass2("");
  };
  useEffect(() => {
    const getFile = (id) => {
      Axios.get(`http://localhost:2222/updating/${id}`, {
        withCredentials: true,
      }).then((response) => {
        setCountryName(response.data[0].countryName);
        setPlaceName(response.data[0].placeName);
        setAdvType(response.data[0].advType);
        setDescription(response.data[0].description);
      });
    };
    getFile(id);
  }, [id]);
  const update = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("countryName", countryName);
    formData.append("placeName", placeName);
    formData.append("advType", advType);
    formData.append("description", description);

    if (
      !placeName.trim() ||
      !countryName.trim() ||
      !advType.trim() ||
      !description.trim()
    ) {
      setErr("Err: all forms must be filled");
    } else {
      Axios.post(`http://localhost:2222/update/${id}`, formData, {
        withCredentials: true,
      }).then((response) => {
        setErr(response.data.msg);

        setCllass("MODELstyle");
        setclass2("cover");
      });
      push(`/my-adv/${userId}`);
      // setCountryName("");
      // setAdvType("");
      // setDescription("");
      // setPlaceName("");
    }
  };

  return (
    <div className="newAdv-containers">
      <div className={classs2}>
        <div className={classs}>
          <h3 style={{ color: "black" }}> {err}</h3>
          <button className="portBtn" onClick={removeport}>
            <h1 style={{ color: "black" }}>OK</h1>
          </button>
        </div>
      </div>

      <form className="edit-Adv-Form">
        <h3 className="heads">UDATE ADVENTURE</h3>

        <h4 className="errDisplayer">{err} </h4>
        <label className="labelName">Country </label>
        <input
          className="inputHolder"
          type="text"
          name="countryName"
          placeholder="Ethiopia"
          autoComplete="off"
          value={countryName}
          onChange={getCountry}
        />

        <label className="labelName">Name of the Place</label>
        <input
          className="inputHolder"
          type="text"
          name="placeName"
          placeholder="Dashin mountains"
          autoComplete="off"
          value={placeName}
          onChange={getPlace}
        />

        <label className="labelName">Type of Adventure</label>
        <select
          className="inputHolder"
          type="text"
          name="advType"
          autoComplete="off"
          value={advType}
          onChange={getType}
        >
          <option value="Camping">Camping</option>
          <option value="Canoeing">Skydiving</option>
          <option value="Climbing">Climbing</option>
          <option value="Mountain biking">Mountain biking</option>
          <option value="Trekking">Trekking</option>
        </select>

        <label className="labelName">Description about the place</label>
        <textarea
          className="inputHolder"
          type="text"
          name="description"
          rows="5"
          column="50"
          autoComplete="off"
          value={description}
          onChange={getDiscription}
        />

        <button className="edit-btn" type="submitt" onClick={update}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;

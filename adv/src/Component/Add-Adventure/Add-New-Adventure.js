import React, { useState, useRef } from "react";
import Axios from "axios";
import "./Add-New-Adv.css";
import Im from "../../asset/toomas-tartes-Yizrl9N_eDA-unsplash (1).jpg";

const AddNewAdventure = () => {
  const [classs, setCllass] = useState("ad");
  const [classs2, setclass2] = useState("");
  const inputRef = useRef(null);
  const [photo, setPhoto] = useState("");
  const [countryName, setCountryName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [advType, setAdvType] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");

  const getPhoto = (e) => {
    setPhoto(e.target.files[0]);
  };
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
  const SubmittInputs = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("countryName", countryName);
    formData.append("placeName", placeName);
    formData.append("advType", advType);
    formData.append("description", description);
    formData.append("photo", photo);

    if (
      !placeName.trim() ||
      !countryName.trim() ||
      !advType.trim() ||
      !description.trim() ||
      !photo
    ) {
      setErr("Err: all forms must be filled");
    } else if (description.trim().length < 200) {
      setErr("Err: description should not be less than 200 words");
    } else {
      Axios.post("http://localhost:2222/sharing_adventure", formData, {
        withCredentials: true,
      }).then((response) => {
        setErr(response.data.msg);
        setCllass("MODELstyle");
        setclass2("cover");
      });

      setCountryName("");
      setAdvType("");
      setDescription("");
      setPlaceName("");
      setPhoto("");
      inputRef.current.value = null;
    }
  };
  return (
    <div className="newAdvcontainer">
      <div className={classs2}>
        <div className={classs}>
          <h3 style={{ color: "black" }}>{err}</h3>
          <button className="portBtn" onClick={removeport}>
            <h1 style={{ color: "white" }}>OK</h1>
          </button>
        </div>
      </div>

      <div className="flex">
        <form className="newAdv-Form">
          <h3 className="head">Share your adventure</h3>

          <h4 className="errDisplayer">{err} </h4>
          <label className="formQ">Country </label>
          <input
            className="inputHold"
            type="text"
            name="countryName"
            placeholder="Ethiopia"
            autoComplete="off"
            value={countryName}
            onChange={getCountry}
          />

          <label className="formQ">Name of the Place</label>
          <input
            className="inputHold"
            type="text"
            name="placeName"
            placeholder="Dashin mountains"
            autoComplete="off"
            value={placeName}
            onChange={getPlace}
          />

          <label className="formQ">Type of Adventure</label>
          <select
            className="inputHold"
            id="selects"
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

          <label className="formQ">Description about the place</label>
          <textarea
            className="inputHold"
            type="text"
            name="description"
            rows="5"
            column="50"
            autoComplete="off"
            value={description}
            onChange={getDiscription}
          />

          <label className="formQ">Photo</label>
          <input
            className="inputHold"
            type="file"
            name="photo"
            accept="image/*"
            ref={inputRef}
            onChange={getPhoto}
          />

          <button className="Add-btn" type="submitt" onClick={SubmittInputs}>
            Submit
          </button>
        </form>

        <div className="adjusent">
          <img src={Im} alt="in" className="imgAdd" />
        </div>
      </div>
    </div>
  );
};

export default AddNewAdventure;

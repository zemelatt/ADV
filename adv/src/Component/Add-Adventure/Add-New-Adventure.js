import React, { useState, useRef } from "react";
import Axios from "axios";

import LoginErr from "./LoginErr";
import "./Add-New-Adv.css";
import InputFormat from "../Input-and-textarea-Formats/InputFormat";
import TextAreaFormat from "../Input-and-textarea-Formats/TextAreaFormat";
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
      <LoginErr
        setclass2={setclass2}
        classs2={classs2}
        classs={classs}
        err={err}
        removeport={removeport}
      />
      <div className="flex">
        <form className="newAdv-Form">
          <h3 className="head">Share your adventure</h3>
          <h4 className="errDisplayer">{err} </h4>
          <label className="formQ">Country </label>
          <InputFormat
            InputClassName={"inputHold"}
            TextType="text"
            NameOfInput="countryName"
            OnPlaceHolder="Ethiopia"
            AutoOption="off"
            OnChangingInputs={getCountry}
            ValueOfInput={countryName}
          />

          <label className="formQ">Name of the Place</label>

          <InputFormat
            InputClassName={"inputHold"}
            TextType="text"
            NameOfInput="placeName"
            OnPlaceHolder="Dashin mountains"
            AutoOption="off"
            OnChangingInputs={getPlace}
            ValueOfInput={placeName}
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

          <TextAreaFormat
            InputClassName="inputHold"
            TextType="text"
            NameOfInput="description"
            OnPlaceHolder="discribe the place by more than 200 words"
            AutoOption="off"
            RowsOfInput="5"
            ColumnOfInput="50"
            OnChangingInputs={getDiscription}
            ValueOfInput={description}
          />
          <label className="formQ">Photo</label>
          <InputFormat
            InputClassName={"inputHold"}
            TextType="file"
            NameOfInput="photo"
            Accept="image/*"
            OnChangingInputs={getPhoto}
            RefValue={inputRef}
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

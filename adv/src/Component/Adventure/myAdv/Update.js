import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

import "./update.css";
import TextAreaFormat from "../../Input-and-textarea-Formats/TextAreaFormat";
import InputFormat from "../../Input-and-textarea-Formats/InputFormat";
import LoginErr from "../../Add-Adventure/LoginErr";

const Update = () => {
  const userId = sessionStorage.getItem("userId");

  const push = useNavigate();
  const { id } = useParams();

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
    }
  };

  return (
    <div className="newAdv-containers">
      {/* <LoginErr
        setclass2={setclass2}
        classs2={classs2}
        classs={classs}
        err={err}
        removeport={removeport}
      /> */}
      <form className="edit-Adv-Form">
        <h3 className="heads">Update Adventure</h3>

        <h4 className="errDisplayer">{err} </h4>
        <label className="labelName">Country </label>
        <InputFormat
          InputClassName="inputHolder"
          TextType="text"
          NameOfInput="countryName"
          OnPlaceHolder="Ethiopia"
          AutoOption="off"
          OnChangingInputs={getCountry}
          ValueOfInput={countryName}
        />

        <label className="labelName">Name of the Place</label>
        <InputFormat
          InputClassName="inputHolder"
          TextType="text"
          NameOfInput="placeName"
          OnPlaceHolder="Dashin mountains"
          AutoOption="off"
          OnChangingInputs={getPlace}
          ValueOfInput={placeName}
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

        <TextAreaFormat
          InputClassName="inputHolder"
          TextType="text"
          NameOfInput="description"
          OnPlaceHolder="discribe the place by more than 200 words"
          AutoOption="off"
          RowsOfInput="5"
          ColumnOfInput="50"
          OnChangingInputs={getDiscription}
          ValueOfInput={description}
        />

        <button className="edit-btn" type="submitt" onClick={update}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;

import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import './states.css';


export default function States() {
  const stateName = React.useRef(null);
  const districtValue = React.useRef(null);
  const villageValue = React.useRef(null);
  const villageResponse = useState([]);
  const [data, setData] = useState([]);
  const [stateID, setStateId] = useState();
  const [districtID, setDistrictId] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [villageData, setVillageData] = useState([]);
  const [showStateDiv, setShowStateDiv] = React.useState(false);
  const [showDistrictDiv, setShowDistrictDiv] = React.useState(false);
  const [showVillageDiv, setShowVillageDiv] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(true);
  useEffect(() => {
    const loadUsers = async () => {
      axios.get('https://gramsevaapiv4.azurewebsites.net/api/state/getallstates').
        then(response => {
          setShowLoader(false);
          setShowStateDiv(true);
          console.log(response.data);
          setData(response.data);
        }).catch(err => { console.log(err) });
    }
    loadUsers()
  }, []);
  const handleStateChange = (e) => {
    console.log(e.target.value);
    const stateInput = e.target.value;
    console.log(stateInput);
    setStateId(stateInput);
    var url = `https://gramsevaapiv4.azurewebsites.net/api/District/${stateInput}`;
    axios.get(url).
      then(res => {
        console.log(res);
        setShowDistrictDiv(true);
        setDistrictData(res.data);
      }).catch(err => { console.log(err) });
  };
  const handleDistrictChange = (e) => {
    console.log(e.target.value);
    const districtInput = e.target.value;
    console.log(districtInput);
    setDistrictId(districtInput);
    var url = `https://gramsevaapiv4.azurewebsites.net/api/Village/GetVillagesByIds/${stateID}/districtId/${districtInput}`;
    axios.get(url).
      then(res => {
        console.log(res);
        res.data.forEach(element => {
          if(element.villageName != null)
          {
            villageResponse.push(element.villageName);            
          }
         
        });        
        console.log(villageResponse);
        setShowVillageDiv(true);
        setVillageData(villageResponse);
      }).catch(err => { console.log(err) });
  };
  const handleAddState = (e) => {
    const params = JSON.stringify({
      "stateName": stateName.current.value
    });
    console.log(params);
    axios.post('https://gramsevaapiv4.azurewebsites.net/api/state',params,{headers: {'Content-Type': 'application/json'}}).
      then(res => {
        console.log(res);
      }).catch(err => { console.log(err) });
  };
  const handleAddDistrict = (e) =>{
    const params = JSON.stringify({
      "districtName": districtValue.current.value,
      "stateId": stateID
    });
    console.log(params);
    axios.post('https://gramsevaapiv4.azurewebsites.net/api/district',params,{headers: {'Content-Type': 'application/json'}}).
      then(res => {
        console.log(res);
      }).catch(err => { console.log(err) });
  };
  const handleAddVillage = (e) =>{
    const params = JSON.stringify({
      "districtId": districtID,
      "stateId": stateID,
      "villageName":villageValue.current.value
    });
    console.log(params);
    axios.post('https://gramsevaapiv4.azurewebsites.net/api/village',params,{headers: {'Content-Type': 'application/json'}}).
      then(res => {
        console.log(res);
      }).catch(err => { console.log(err) });
  };
  return (
    <div className="statescontainer">
      {
        showLoader && (<CircularProgress />)
      }
      {showStateDiv && (
        <div className="newUserItem">
          <label>States</label>
          <select className="newUserSelect" name="active" id="active" onChange={handleStateChange}>
            <option value="000">--Select One--</option>
            {data.map((user, index) => (
              <option value={user.stateId}>{user.stateName}</option>
            ))}
          </select>
          <div className="newUserItem">
            <label>Add New State</label>
            <input type="text" placeholder="Add new state" ref={stateName} />
            <button className="AddButton" onClick={handleAddState}>Add State</button>
            <button className="AddButton" onClick={handleAddState}>Edit</button>
          </div>
        </div>)
      }

      {showDistrictDiv && (
        <div className="newUserItem">
          <label>Districts</label>
          <select className="newUserSelect" name="active" id="active" onChange={handleDistrictChange}>
            <option value="000">--Select One--</option>
            {districtData.map((districts, index) => (
              <option value={districts.districtId}>{districts.districtName}</option>
            ))}
          </select>
          <div className="newUserItem">
            <label>Add New District</label>
            <input type="text" placeholder="Add new district" ref={districtValue} />
            <button className="AddButton" onClick={handleAddDistrict}>Add District</button>
            <button className="AddButton" onClick={handleAddDistrict}>Edit</button>
          </div>
        </div>
      )}

      {showVillageDiv && (
        <div className="newUserItem">
          <label>Villages</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="000">--Select One--</option>
            {villageData.map((villages, index) => (
              <option value={villages}>{villages}</option>
            ))}
          </select>
          <div className="newUserItem">
            <label>Add New Village</label>
            <input type="text" placeholder="Add new village" ref={villageValue} />
            <button className="AddButton" onClick={handleAddVillage}>Add Village</button>
            <button className="AddButton" onClick={handleAddVillage}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}

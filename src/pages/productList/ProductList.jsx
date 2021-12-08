import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { DeleteOutline, SentimentSatisfiedAltSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function ProductList() {
  const crpname = React.useRef(null);
  const crpdescription = React.useRef(null);
  const userid = React.useRef(null);
  const isapproved = React.useRef(null);
  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  const [showLoader, setShowLoader] = React.useState(true);
  const [showAddSection, setAddSection] = React.useState(false);
  var menu = false;
  useEffect(() => {
    const loadCrops = async () => {
      axios.get('https://gramsevaapiv4.azurewebsites.net/api/crop').
        then(result => {
          setShowLoader(false);
          console.log(result.data)
          setData(result.data)
        }).catch(err => { console.log(err) });
    }
    loadCrops()
  }, []);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    menu = e.target.value;
  };
  const handleAddCrop = async (e) => {
    setAddSection(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();;
    const formatData = new FormData();
    formatData.append("ImageFile", file);
    formatData.append("CropName", crpname.current.value);
    formatData.append("Description", crpdescription.current.value);
    formatData.append("Isapproved", menu);
    formatData.append("UserId", userid.current.value);
    console.log(formatData);
    axios.post('https://gramsevaapiv4.azurewebsites.net/api/crop', formatData, { headers: { "Content-Type": "multipart/form-data" } }).
      then(res => {
        console.log(res);
      }).catch(err => { console.log(err) });



  };
  const columns = [
    { field: "cropName", headerName: "Crop Name", width: 200 },
    {
      field: "image",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.cropName}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Crop Description",
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {showLoader && (
        <CircularProgress />
      )}
      <br></br>
      <br></br>
      <br></br>
      <button className="AddCropBtn" onClick={handleAddCrop}>Add Crop</button>
      <br></br>
      <br></br>
      <br></br>
      {showAddSection && (
        <div className="addNewCrop">
          <form className="newUserForm" onSubmit={handleSubmit}>
            <div className="newUserItem">
              <label htmlFor="CropName">Crop Name</label>
              <input type="text" ref={crpname} placeholder="Crop Name" />
            </div>
            <div className="newUserItem">
              <label htmlFor="Description">Crop Description</label>
              <input type="text" ref={crpdescription} placeholder="Crop Description" />
            </div>
            <div className="newUserItem">
              <label htmlFor="ImageFile">Crop Image</label>
              <input type="file" onChange={saveFile} />
            </div>
            <div className="newUserItem">
              <label htmlFor="UserId">User ID</label>
              <input type="text" ref={userid} placeholder="User ID" />
            </div>
            <div className="newUserItem">
              <label htmlFor="Isapproved">IsApproved</label>
              <select className="newUserSelect" onChange={handleSelect} name="active" id="active">
                <option value="">--Select One--</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <button type="submit" className="newUserButton">Create Crop</button>
          </form>
        </div>)}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}

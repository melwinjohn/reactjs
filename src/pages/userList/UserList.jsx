import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = React.useState(true);
  useEffect(() => {
    const loadUsers = async () => {
      axios.get('https://gramsevaapiv4.azurewebsites.net/api/Login/GetAll').
        then(response => {
          setShowLoader(false);
          console.log(response.data)
          setData(response.data)
        }).catch(err => { console.log(err) });
    }
    loadUsers()
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [

    // {
    //   field: "userName",
    //   headerName: "UserName",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "userName", headerName: "User Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "userType",
      headerName: "User Type",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {showLoader && (
        <CircularProgress />
      )}
      <div className="userTitleContainer">
        <Link to="/newUser">
            <button className="userAddButton">Create</button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

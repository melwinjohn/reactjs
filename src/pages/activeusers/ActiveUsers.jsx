import "./activeusers.css";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Chip from '@material-ui/core/Chip';

export default function ActiveUsers() {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = React.useState(true);
  useEffect(() => {
    const loadUsers = async () => {
      axios.get('https://gramsevaapiv4.azurewebsites.net/api/User/GetActiveUsers').
        then(response => {
          setShowLoader(false);
          console.log(response.data)
          setData(response.data)
        }).catch(err => { console.log(err) });
    }
    loadUsers()
  }, []); 

  const columns = [
    { field: "userName", headerName: "User Name", width: 120 },   
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
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
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <> 
              <Chip
              label="Active"
              color="primary"
              className="chipclass"
              variant="outlined"
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
     
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}

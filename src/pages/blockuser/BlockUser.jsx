import "./blockuser.css";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";

export default function BlockUser() {
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

  const handleOnUserBlock = (id) => {
    console.log(id);
    var url = `https://gramsevaapiv4.azurewebsites.net/api/user/blockuser?userId=${id}`;
      axios.patch(url).then(response => {
          if(response)
          {
            window.location.reload();
          }

      }).catch(err => { console.log(err) });
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [   
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
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <> 
              
            {params.row.isBlocked ?
              (<button className="blockedUser">Blocked</button>)              
                :      
              (<button className="blockUserEdit" onClick={()=>handleOnUserBlock(params.row.id)}>Block</button>)
            }
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

import "./newUser.css";
import React from "react";
import axios from "axios";

export default function NewUser() {
  const username = React.useRef(null);
  const firstname = React.useRef(null);
  const lastname = React.useRef(null);
  const age = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const phone = React.useRef(null);
  const address = React.useRef(null);
  const [showForm, setShowForm] = React.useState(true);
  var menu = "";
  const handleOnSelect = (e) =>{
    console.log(e.target.value);
    menu = e.target.value;
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();;
    var params =JSON.stringify({
      "userName": username.current.value,
      "firstName": firstname.current.value,
      "lastName": lastname.current.value,
      "age": age.current.value,
      "address": address.current.value,
      "phone": phone.current.value,
      "email": email.current.value,
      "password": password.current.value,
      "userType": menu,

    });
    console.log(params);
    axios.post('https://gramsevaapiv4.azurewebsites.net/api/register/create', params, { headers: { "Content-Type": "application/json" } }).
      then(res => {
        console.log(res);
        setShowForm(false);
      }).catch(err => { console.log(err) });
  };
  
  return (
    <div className="newUser">
      { showForm ? (      
      <h1 className="newUserTitle">New User</h1>
      ) : (<h1 className="newUserTitle">New User Created!</h1>)}
      { showForm && (
      <form className="newUserForm" onSubmit={handleOnSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john_smith" ref={username} />
        </div>
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John" ref={firstname} />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Smith" ref={lastname} />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="text" placeholder="30" ref={age} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" ref={email} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" ref={password} />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+9190XXXXXXXX" ref={phone} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" ref={address} />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>User Type</label>
          <select className="newUserSelect" name="active" id="active" onChange={handleOnSelect}>
            <option value="000">--Select One--</option>
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
          </select>
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>
      )}
      </div>
  );
}

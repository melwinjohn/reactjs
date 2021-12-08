import React, { useEffect, useState } from "react";
import axios from 'axios';
import './autosuggest.css';

export default function AutoSuggest() {
  const [users, setUsers] = useState([]);
  const[text, setText] = useState('');
  const[suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
    const response = await axios.get('https://gramsevaapiv4.azurewebsites.net/api/crop');
    console.log(response.data)
    setUsers(response.data)
    }
    loadUsers()
    }, []);
    const onSuggestHandler = (text) => {
        setText(text)
        setSuggestions([])
    }
    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = users.filter(user => {
            const regex = new RegExp(`${text}`, "gi");
            return user.cropName.match(regex)
            })
        }
        console.log('matches',matches);
        setSuggestions(matches);
        setText(text);
    }
   
  return (
    <div className="autosuggestcontainer">
        <input type="text" className="col-md-12 input"
        onChange={e => onChangeHandler(e.target.value)} value={text} onBlur={() =>{
            setTimeout(() => {
                setSuggestions([])
            }, 1000);
        } } />
        {suggestions && suggestions.map((suggestions, i ) =>
        <div key={i} className=" suggestion col-md-12 justify-content-md-center" onClick={() => onSuggestHandler(suggestions.cropName)}>{suggestions.cropName}</div>
        )}
    </div>
  );
}


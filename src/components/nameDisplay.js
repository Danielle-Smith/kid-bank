import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './user';


const NameDisplay = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(
          `http://localhost:5000/users`,
        )
        .then(response => setState(response.data), [])
        .catch(error => console.log(error));
    }, []);
    
    
    return (
        
      <div className="App">
        <Link to="/add-user">Add User</Link>
        
        {
        state.map(user => (
            <User key={user.id} id={user.id} name={user.name} amount={user.amount} slug={user.id}/>    
        ))
        }
        
      </div>
    );
};

export default NameDisplay;
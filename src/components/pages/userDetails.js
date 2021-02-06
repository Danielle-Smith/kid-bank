import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetails(props) {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(
            `http://localhost:5000/user/${props.match.params.slug}`,
            console.log('trying to get user')
          )
          .then(response => setState(response.data), [])
          .catch(error => console.log(error));
  
          
    }, []);
    
    return (
        <div>
            <h1>Name: {state.name}</h1>
            <p>Amount: ${state.amount}</p>
            <input>
            </input>
            <button>+</button>
            <button>-</button>
        </div>
    );
}

export default UserDetails;
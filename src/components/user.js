import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <div>
            <Link to={`/user/${props.id}`}><h1>{props.name}</h1></Link>
            <h3>${props.amount}</h3>
        </div>
    )
}
export default User;
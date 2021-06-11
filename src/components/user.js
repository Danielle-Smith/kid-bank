import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <div className="user-name-amount">
            <Link to={`/user/${props.id}`}><h2>{props.name}</h2></Link>
            <h3>${props.amount}</h3>
        </div>
    )
}
export default User;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import useForm from '../inputs';

const AddUser = (props) => {

    const handleSubmit = (e) => {
        axios({
            method: "POST",
            url: 'https://powerful-peak-61640.herokuapp.com/add-user',
            headers: {
                'Access-Control-Allow-Origin': 'https://powerful-peak-61640.herokuapp.com',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                name: inputs.name,
                amount: inputs.amount
            }
        }).then(res => {
            alert('User Added')
            props.history.push('/')

        }).catch(err => console.log(err, "error"))
        e.preventDefault();
    }

    const { inputs, handleInputChange } = useForm(inputs);
    return (
        <div className="app">
            <div className='add-user'>
                <Link className="back-link" to='/'>Back</Link>
                <form className='add-user-form'>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        placeholder="Name"
                        onChange={handleInputChange}>
                    </input>
                    <div className="input-group">
                        <div className="dollar-sign">$</div>
                        <input
                            type="text"
                            name="amount"
                            value={inputs.amount}
                            placeholder="Amount"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add</button>
                </form>
            </div>
        </div>
    )
}
const AddUserWithRouter = withRouter(AddUser);
export default AddUserWithRouter;
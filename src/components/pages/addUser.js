import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../inputs';

const AddUser = () => {

    const handleSubmit = (e) => {
        axios({
            method: "POST",
            url: 'http://localhost:5000/add-user',
            data: {
                name: inputs.name,
                amount: inputs.amount
            }
        }).then(console.log(inputs.amount)
        ).catch(err => console.log(err, "error"))
    }
    
    const {inputs, handleInputChange} = useForm(inputs);
    return (
        <div className='add-user'>
            <Link to='/'>Back</Link>
            <form className='add-user-form'>
                <input 
                    type="text" 
                    name="name"
                    value={inputs.name} 
                    placeholder="Name"
                    onChange={handleInputChange}>
                </input>
                <input 
                    type="text" 
                    name="amount"
                    value={inputs.amount} 
                    placeholder="Amount"
                    onChange={handleInputChange}>
                </input>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddUser;
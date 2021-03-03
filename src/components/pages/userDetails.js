import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from '../inputs';

function UserDetails(props) {
    const [state, setState] = useState([]);
    
    const [amount, setAmount] = useState();

    const handleSubmitSub = (e) => {
        setCount(state.amount -= inputs.amount)
        const amount = {
            amount: state.amount
        }
        axios.patch(`http://localhost:5000/user-update/${props.match.params.slug}`, {
            amount: state.amount
        }).then(
            console.log(state.amount, inputs.amount)
        ).catch(err => console.log(err, "error"))
    }
    const handleSubmitAdd = (e) => {
        let inputAmount = parseFloat(inputs.amount)
        let amount = parseFloat(state.amount)
        
        setCount(amount += inputAmount)
    
        axios.patch(`http://localhost:5000/user-update/${props.match.params.slug}`, {
            amount: amount
        }).then(
            console.log(amount, inputAmount)
        ).catch(err => console.log(err, "error"))
    }

    useEffect(() => {
        axios.get(
            `http://localhost:5000/user/${props.match.params.slug}`
          )
          .then(response => setState(response.data), [])
          .catch(error => console.log(error));
    }, []);

    const {inputs, handleInputChange} = useForm(inputs);
    const [count, setCount] = useState();
    return (
        <div>
            <h1>Name: {state.name}</h1>
            <p>Amount: ${state.amount}</p>
            <form >
                <input 
                    type="text" 
                    name="amount"
                    value={inputs.amount} 
                    placeholder="Amount"
                    onChange={handleInputChange}>
                </input>
                <button type="submit" onClick={handleSubmitAdd}>+</button>
                <button type="submit" onClick={handleSubmitSub}>-</button>
            </form>
        </div>
    );
}

export default UserDetails;
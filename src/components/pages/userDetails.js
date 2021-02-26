import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useForm from '../inputs';

function UserDetails(props) {
    const [state, setState] = useState([]);
    
    const [amount, setAmount] = useState();

    const handleSubmitSub = (e) => {
        e.preventDefault();
        setCount(state.amount - inputs.amount)
    }
    const handleSubmitAdd = (e) => {
        e.preventDefault();
        setCount(state.amount + inputs.amount)
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
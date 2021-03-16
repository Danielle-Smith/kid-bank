import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect, withRouter } from 'react-router-dom';
import useForm from '../inputs';

function UserDetails(props) {
    const [state, setState] = useState([]);
    let redirect = false;
    

    const handleSubmitSub = (e) => {
        if (inputs.amount) {
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
    }
    const handleSubmitAdd = (e) => {
        if (inputs.amount) {
            let inputAmount = parseFloat(inputs.amount)
            let amount = parseFloat(state.amount)
            
            setCount(amount += inputAmount)
        
            axios.patch(`http://localhost:5000/user-update/${props.match.params.slug}`, {
                amount: amount
            }).then(
                console.log(amount, inputAmount)
            ).catch(err => console.log(err, "error"))
            
        }
    }

    useEffect(() => {
        axios.get(
            `http://localhost:5000/user/${props.match.params.slug}`
          )
          .then(response => setState(response.data), [])
          .catch(error => console.log(error));
    }, []);

    const handleDelete = (e) => {
        let redirect = true
        axios.delete(`http://localhost:5000/delete-user/${props.match.params.slug}`
        ).then(res => {
            props.history.push("/");
        }).catch(error => {
            console.log("delete error", error);
        });
        e.preventDefault();
    }

    const {inputs, handleInputChange} = useForm(inputs);
    const [count, setCount] = useState();
    
    if (redirect === true) {
        <Redirect to="/" />
    }
    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>Name: {state.name}</h1>
            <p onClick={handleDelete}>X</p>
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
const UserDetailsWithRouter = withRouter(UserDetails);
export default UserDetailsWithRouter;

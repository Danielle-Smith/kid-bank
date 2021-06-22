import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect, withRouter } from 'react-router-dom';
import useForm from '../inputs';
import { FaTrash } from "react-icons/fa";

function UserDetails(props) {
    const [state, setState] = useState([]);

    const handleSubmitSub = (e) => {
        if (inputs.amount) {
            setCount(state.amount -= inputs.amount)
            const amount = {
                amount: state.amount
            }
            axios.patch(`https://dds-piggy-bank-db.herokuapp.com/user-update/${props.match.params.slug}`, {
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

            axios.patch(`https://dds-piggy-bank-db.herokuapp.com/user-update/${props.match.params.slug}`, {
                amount: amount
            }).then(
                console.log(amount, inputAmount)
            ).catch(err => console.log(err, "error"))

        }
    }

    useEffect(() => {
        axios.get(
            `https://dds-piggy-bank-db.herokuapp.com/user/${props.match.params.slug}`
        )
            .then(response => setState(response.data), [])
            .catch(error => console.log(error));
    }, []);

    const handleDelete = (e) => {
        let redirect = true
        axios.delete(`https://dds-piggy-bank-db.herokuapp.com/delete-user/${props.match.params.slug}`
        ).then(res => {
            props.history.push("/");
        }).catch(error => {
            console.log("delete error", error);
        });
        e.preventDefault();
    }

    const { inputs, handleInputChange } = useForm(inputs);
    const [count, setCount] = useState();

    return (
        <div className="app">
            <div className='user-details-container'>
                <Link className='back-link' to='/'>Back</Link>
                <div className="user-details-wrapper">
                    <div className="user-details">
                        <div className='name-display'>
                            <div className="name">{state.name}</div>
                            <p onClick={handleDelete}>
                                <FaTrash />
                            </p>
                        </div>
                        <h3>Amount: ${state.amount}</h3>
                        <form className="amount-form">
                            <div className="dollar-sign">$</div>
                            <input
                                type="text"
                                name="amount"
                                value={inputs.amount}
                                placeholder="Amount"
                                onChange={handleInputChange}>
                            </input>
                            <button className="button" type="submit" onClick={handleSubmitAdd}>+</button>
                            <button className="button" onClick={handleSubmitSub}>-</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
const UserDetailsWithRouter = withRouter(UserDetails);
export default UserDetailsWithRouter;

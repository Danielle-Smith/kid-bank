import { useState } from 'react';

const deleteUser = (id) => {
    axios.delete(`https://dds-piggy-bank-db.herokuapp.com/delete-user/${id}`
    ).then(console.log("user deleted")
    ).catch(error => {
        console.log("deleteImage error", error);
    });
}

export default deleteUser;
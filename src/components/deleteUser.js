import { useState } from 'react';

const deleteUser = (id) => {
    axios.delete(`https://powerful-peak-61640.herokuapp.com/delete-user/${id}`
    ).then(console.log("user deleted")
    ).catch(error => {
        console.log("deleteImage error", error);
    });
}

export default deleteUser;
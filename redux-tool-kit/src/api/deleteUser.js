import React from "react";
import axios from "axios";

export async function deleteUser(id) {
    const res = await axios.delete(`http://localhost:3000/users/${id}`)   
    return res.data 
}
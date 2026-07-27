import axios from 'axios'
import React from 'react'

export async function createUser(data) {
  
    const res = await axios.post('http://localhost:3000/users' , data);

    return res ;
}



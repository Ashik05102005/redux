import axios from 'axios'
import React from 'react'

export async function fetchUser1() {
    try{
        const response =await axios.get("http://localhost:3000/users")
        return response.data ; 
    }
    catch(error){
        console.error(error.message); 
    }
  
}


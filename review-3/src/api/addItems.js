import axios from 'axios'
import React from 'react'

export async function addItems(data) {
    console.log(data)
  const response = await axios.post(`http://localhost:3000/items` , data);
  console.log(response);
  return response
}

import axios from 'axios'
import React from 'react'

export async  function fetchProducts(page) {
    // console.log(`https://fakestoreapi.com/products?_page=${page}&_per_page=5`);
    const res = await axios.get(`http://localhost:3000/products?_page=${page}&_per_page=5`);
    console.log(res.data)
    return res.data
}

import axios from "axios"

export const fetchItems = async()=>{
    const res = await axios.get(`http://localhost:3000/items`);
    console.log(res.data) ;
    return res.data
}
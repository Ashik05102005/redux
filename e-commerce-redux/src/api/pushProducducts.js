import axios from "axios"


export const pushProducts = async (data)=>{
    const res = await axios.post(`http://localhost:3000/products` , data)
    return res ;
}
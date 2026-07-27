import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk('user/fetchUser',
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        return response.data ;
    }
)
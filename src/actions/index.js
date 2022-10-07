import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const api='https://nftidentityservice.iamx.id/did/lookup'

//crea una categoria
export const POSTPOLICYID = createAsyncThunk('POSTPOLICYID', async (input) => { 
    try{
        const response=await axios.post(`${api}`,input);
        return response.data
    }
    catch (e){
        //let response2= JSON.parse(e.request.response);
        console.log(e)
    }
    
})


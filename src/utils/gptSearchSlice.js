import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gpt",
    initialState :{
        isGptPage:false
    },
    reducers:{
       toggleGptPage:(state)=>{
           state.isGptPage=!state.isGptPage
       }
    }
})

export const {toggleGptPage}=gptSearchSlice.actions;

export default gptSearchSlice.reducer;

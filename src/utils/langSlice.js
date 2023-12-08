import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"lang",
    initialState :{
        langKey:"en"
    },
    reducers:{
       selectLanguge:(state,action)=>{
           state.langKey=action.payload
       }
    }
})

export const {selectLanguge}=langSlice.actions;

export default langSlice.reducer;

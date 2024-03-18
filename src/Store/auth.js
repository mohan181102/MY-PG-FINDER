import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    authstatus:false,
    userdata:null
}

const auth = createSlice({
    initialState:initialstate,
    name:"auth",
    reducers:{
        login:(state,action)=>{
            state.authstatus=true,
            state.userdata=action.payload
        },
        logout:(state,action)=>{
            state.authstatus=false,
            state.userdata=action.payload
        }
    }
})

export default auth.reducer;
export const {login, logout} = auth.actions; 
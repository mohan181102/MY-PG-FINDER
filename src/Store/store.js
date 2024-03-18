import { configureStore } from "@reduxjs/toolkit";
import colors from "./colors";
import auth from "./auth";

const store = configureStore({
    reducer:{
        colors:colors,
        auth:auth 
    }
})

export default store
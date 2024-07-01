'use client'

import { start } from "repl";

const initialState = [{
    name: "",
    email: "",
    password: "",
    title:""
}];

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
       

        case "Data":
            return action.payload;

        case "Register":
            if (state[0].name === "") {
                return ([action.payload])
            }
            return ([...state, action.payload])
        default:
            return state;
    }
}

export default reducer;
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const chatSlice = createSlice({

    name:"chat",
    initialState :{

        messages:[]
    },
    reducers :{

        addChat : (state,action)=>{
            state.messages.splice(20,1);
            state.messages.unshift(action.payload);
        }
    }

});

export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;
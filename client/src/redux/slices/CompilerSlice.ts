import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {  
html:"",
css:"",
javascript:"",
currentLanguage:"html",
}

const CompilerSlice = createSlice({
    name:"CompilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage:(state,action:PayloadAction<string>)=>{
              state.currentLanguage = action.payload;
        }
    },
});

export default CompilerSlice.reducer;
export const {updateCurrentLanguage} = CompilerSlice.actions;
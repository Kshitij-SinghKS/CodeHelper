import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface CompilerStateType {
    fullCode:{
        html:string,
        css:string,
        javascript:string
    };
    currentLanguage:"html" | "css" | "javascript";
   

}
const initialState:CompilerStateType = {  
    fullCode:{
        html :"This is HTML code",
        css :"This is CSS code",
        javascript :"This is JavaScript code"
   },
currentLanguage:"html",

}

const CompilerSlice = createSlice({
    name:"CompilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage:(state,action:PayloadAction<CompilerStateType["currentLanguage"]>)=>{
              state.currentLanguage = action.payload;
        },
        updateCodeValue:(state,action:PayloadAction<string>)=>{
           state.fullCode[state.currentLanguage] = action.payload;
        },
        
        
    },
});

export default CompilerSlice.reducer;
export const {updateCurrentLanguage,updateCodeValue} = CompilerSlice.actions;
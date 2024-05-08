import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}
const initialState: CompilerStateType = {
  fullCode: {
    html: `
<html lang="en">
     <body>
        <div class="container">
        <h1>Simple Background Color Changer</h1>
        <button id="changeColorBtn">Change Color</button>
        </div>
        <script src="script.js"></script>
    </body>
 </html>
        `,
    css: `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            text-align: center;
        }
        
        button {
            display: block;
            margin: 0 auto;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        
        `,
    javascript: `
        document.getElementById("changeColorBtn").addEventListener("click", function() {
            var randomColor = getRandomColor();
            document.body.style.backgroundColor = randomColor;
        });
        
        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        
        `,
  },
  currentLanguage: "html",
};

const CompilerSlice = createSlice({
  name: "CompilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default CompilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = CompilerSlice.actions;

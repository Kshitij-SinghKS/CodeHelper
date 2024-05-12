import express, { Request, Response } from "express";
import cors from "cors";
import {config} from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";

const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    
    }
));
app.use("/compiler",compilerRouter)
app.use(express.json());
config();
const PORT = process.env.PORT || 4000;
dbConnect();

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

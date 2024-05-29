import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {config} from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";

const app = express();
app.use(cors());

app.use(express.json());
// app.use(bodyParser.json());
app.use('/compiler',compilerRouter);
config();
const PORT = process.env.PORT || 4000;
dbConnect();

app.get("/", (req:Request, res:Response) => {
    res.send("Running Fine");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    
    }
));
app.use(express.json());
const PORT = 4000

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

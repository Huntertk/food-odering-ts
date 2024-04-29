import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";


const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.get('/test', (req:Request, res:Response) => {
    
    res.json({
        message:"Hello"
    })
})


app.listen(3000, () => {
    console.log("Server is Running on PORT 3000");
    
})
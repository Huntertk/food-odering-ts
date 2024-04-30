import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Db is connected")).catch((err) => console.log(err))

const app = express();
const PORT = process.env.PORT as string || 4000

//Middleware
app.use(express.json());
app.use(cors());

app.get('/test', (req:Request, res:Response) => {
    
    res.json({
        message:"Hello"
    })
})


app.listen(PORT, () => {
    console.log("Server is Running on PORT ", PORT);
    
})
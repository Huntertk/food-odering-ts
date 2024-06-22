import express, {Request, Response} from "express";
import cors from 'cors';
import 'dotenv/config';
import mongoose from "mongoose";


//Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err))


//Initializing Express App
const app = express();


//Middlwares
app.use(express.json());
app.use(cors())


//Routes
app.get('/test', async (req:Request, res:Response) => {
    res.status(200).json({message:"Hello From Test"})
})

//Server Listining

app.listen(3000, () => {
    console.log(`Server is running on PORT : 3000`);
})
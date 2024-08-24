import express, {Request, Response} from "express";
import cors from 'cors';
import 'dotenv/config';
import mongoose from "mongoose";
import myUserRoute from './routes/myUserRoute'

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
app.use("/api/my/users", myUserRoute)

//Server Listining

app.listen(3000, () => {
    console.log(`Server is running on PORT : 3000`);
})
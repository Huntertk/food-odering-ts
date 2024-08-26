import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

//Importing Routes
import myUserRoutes from './routes/MyUserRoute';



//Db Conn
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then((con) => {
        console.log(`Db is connected to host ${con.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })

//Initialization Express App
const app = express();



//Middlewares
app.use(express.json());
app.use(cors());


//Routes
app.get('/', (req, res) => {
    res.status(200).json({
        success:true,
        message:"Api Running"
    })
});

app.use('/api/my/user', myUserRoutes);


//Server Listen
app.listen(3000, () => {
    console.log(`Server is Running on PORT : ${3000}`);
    
})


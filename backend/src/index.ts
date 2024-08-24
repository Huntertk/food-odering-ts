import express from 'express';
import cors from 'cors';
import 'dotenv/config';

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
})


//Server Listen
app.listen(3000, () => {
    console.log(`Server is Running on PORT : ${3000}`);
    
})


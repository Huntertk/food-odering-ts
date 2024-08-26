import { Request, Response, NextFunction } from "express";
import User from "../models/user";


const createCurrentUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {auth0Id} = req.body;

        //1. check if user exist
        const existingUser = await User.findOne({auth0Id});

        if(existingUser){
            return res.status(200).json({

            })
        }
        //2. create the user if does't exist
        const newUser = new User(req.body);
        await newUser.save();

        //3. return the user object to the calling client
        return res.status(201).json({
            success:true,
            newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}


export default {
    createCurrentUser
}
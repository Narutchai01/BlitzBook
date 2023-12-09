import { client,connectDB } from "../../server";
import { Request,Response } from "express";
import { ObjectId } from 'mongodb';


export const changePasswordByAdmin = async (req: Request, res: Response) => {
    try {
        console.log("changePasswordByAdmin");
        const { id } = req.query;
        const { password } = req.body;
        await connectDB();
        const updatePassword = {
            password
        };
        const result =  await client.db("user").collection("user").updateOne({_id:new ObjectId(id as string)},{$set:updatePassword});
        res.status(201).json(result);
    } catch (error) {
        console.log("Error",error);
        
    }
};
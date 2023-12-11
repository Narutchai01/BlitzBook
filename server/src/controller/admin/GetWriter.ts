import { Request,Response } from "express";
import {client , connectDB} from "../../server";

export const GetWriter = async (req:Request,res:Response) => {
    try {
        await connectDB();
        const {writer} = req.params;
        const result = await client.db("Project_G").collection(writer).find({}).toArray();
        res.status(200).send({result});
    } catch (error) {
        console.log("Error",error);   
    }
};
import { Request,Response } from "express";
import {client , connectDB} from "../../server";

export const AaddPublisher = async (req:Request,res:Response) => {
    try {
        const {name} = req.body;
        await connectDB();
        if(!name){
            res.status(400).send({message:"Please enter name publisher"});
            return false;
        }
        const find = await client.db("Project_G").collection("Publisher").findOne({name});
        if(find){
            res.status(400).send({message:"Publisher already exists"});
            return false;
        }
        const result = await client.db("Project_G").collection("Publisher").insertOne({name});
        res.status(200).send({result});
    } catch (error) {
        console.log("Error",error);
        
    }
};
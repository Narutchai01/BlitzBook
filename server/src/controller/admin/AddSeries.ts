import { Request,Response } from "express";
import {client , connectDB} from "../../server";

export const AddSeries = async (req:Request,res:Response) => {
    try {
        const {name} = req.body;
        await connectDB();
        if(!name){
            res.status(400).send({message:"Please enter name Series"});
            return false;
        }
        const find = await client.db("Project_G").collection("Series").findOne({name});
        if(find){
            res.status(400).send({message:"Series already exists"});
            return false;
        }
        const result = await client.db("Project_G").collection("Series").insertOne({name});
        res.status(200).send({result});
    } catch (error) {
        console.log("Error",error);
        
    }
};
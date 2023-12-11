import { Request,Response } from "express";
import {client , connectDB} from "../../server";



export const AaddAuthor = async (req:Request,res:Response) => {
    try{
        await connectDB();
        const {name} = req.body;
        if(!name){
            res.status(400).send({message:"Please enter name author"});
            return false;
        }
        const find = await client.db("Project_G").collection("Author").findOne({name});
        if(find){
            res.status(400).send({message:"Author already exists"});
            return false;
        }
        const result = await client.db("Project_G").collection("Author").insertOne({name});
        res.status(200).send({result});
    }
    catch(e){
        console.log("Error",e);
    }
};
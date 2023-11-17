import { Response,Request } from "express";
import { client, connectDB } from "../server";



export const postbook = async (req:Request,res:Response)=>{
    try {
        const {name,price,category} = req.body
        await connectDB()
        const createbook = {
            name,
            price,
            category
        }
        await client.db('book').collection('book').insertOne(createbook)
        res.status(201).json(createbook)
        client.close()
    } catch (error) {
        console.log('Error',error);
    }
}